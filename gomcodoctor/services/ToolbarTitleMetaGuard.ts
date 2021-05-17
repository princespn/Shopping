import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import {BreadcrumbService} from './breadcrumb/breadcrumb.service';


@Injectable()
export class ToolbarTitleMetaGuard implements CanActivate, CanActivateChild {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;

    const metaSettings = route.hasOwnProperty('data') && route.data.toolBarTitle ? route.data.toolBarTitle : 'Shopping Manager';

    this.breadcrumbService.titleObserver.next(metaSettings);

    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
