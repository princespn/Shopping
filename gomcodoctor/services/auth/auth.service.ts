import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import { AuthLoader } from './auth.loader';
import {AccountService} from '@gomcodoctor/services/account/account.service';
import {BaseService} from '@gomcodoctor/services/base.service';
import {Resources} from '@gomcodoctor/_helper/resources';
import { CookieService } from 'ngx-cookie';
import { JwtHelperService } from '@auth0/angular-jwt';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';

@Injectable()
export class AuthService {
  protected _token: string;
  private _redirectUrl: string;
  private user$ = new BehaviorSubject(null);
  private jwtHelper: JwtHelperService;

  get user(){
    return this.user$;
  }

  get token(): string {
    return this._token;
  }

  get redirectUrl(): string {
    return this._redirectUrl;
  }

  set redirectUrl(value: string) {
    this._redirectUrl = value;
  }

  // setRedirectRoute(routeName, params = {}){
  //   this._redirectUrl = '.' + this._namedRoutesService.getRoute(routeName, params);
  // }

  get defaultUrl(): string {
    return this.loader.defaultUrl;
  }

  get isAuthenticated(): boolean {
    return !!this.cookiesService.get(this.loader.storageKey);
  }

  constructor(readonly loader: AuthLoader,
              protected readonly router: Router,
              private accountService: AccountService,
              private apiSerivce: BaseService,
              private cookiesService: CookieService,
              private _namedRoutesService: NamedRoutesService
  ) {
    const currentUser: any = this.cookiesService.getObject(this.loader.storageKey);
    // const authContent = stored ? stored : '{}';
    // const currentUser = JSON.parse(authContent);
    this._token = currentUser && currentUser.token;
    this.jwtHelper = new JwtHelperService();
  }

  public getUser(){
    if (this.isAuthenticated){
      this.user$.next(null);
      this.forceUserUpdate();
    }
  }

  public forceUserUpdate(){
    this.apiSerivce.getOne({id: 'me'}, 'myprofile').subscribe((response) => {
      this.user$.next(response);
    });
  }

  authenticate(res) {
    // const params = this.getHttpParams(this.loader.backend.params);

    const token = res && res.token;

    if (token) {
      this._token = token;
      this.cookiesService.putObject(
        this.loader.storageKey,
        {
          username: '',
          token
        },
        {
          expires: this.jwtHelper.getTokenExpirationDate(token)
        }
      );

      this.getUser();
      // console.log(this._redirectUrl);
      this.router.navigateByUrl(this._redirectUrl || this.loader.defaultUrl).then(() => true);
    }
  }

  async invalidate(): Promise<boolean> {
    this._token = undefined;
    this.cookiesService.remove(this.loader.storageKey);
    this.user$.next(null);
    // this._redirectUrl = this.router.url;
    return this.router.navigate(this.loader.loginRoute);
  }

  protected getHttpParams = (query?: Array<any>): HttpParams => {
    let res = new HttpParams();

    if (query) {
      for (const item of query) {
        res = res.append(item.key, item.value);
      }
    }

    return res;
  }
}
