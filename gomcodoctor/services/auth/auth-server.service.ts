import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

@Injectable()
export class AuthServerService {
  private user$ = new BehaviorSubject(null);

  get user(){
    return this.user$;
  }


  get token(): string {
    return undefined;
  }

  get redirectUrl(): string {
    return undefined;
  }

  set redirectUrl(value: string) {
    return;
  }

  get defaultUrl(): string {
    return undefined;
  }

  get isAuthenticated(): boolean {
    return false;
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return observableOf(false);
  }

  invalidate(): void {
    return;
  }

  public getUser(){
  }
}
