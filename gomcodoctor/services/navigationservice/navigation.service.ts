import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router, private location: Location, private namedRoutesService: NamedRoutesService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  back(defaultPath = '/admin/orders/list'): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl(defaultPath);
    }
  }

  navigateByRouteName(routeName, routeData = {}, extras = {}){
    this.router.navigate([this.namedRoutesService.getRoute(routeName, routeData)], extras);
  }

  navigateByPath(path, extras = {}){
    this.router.navigate([path], extras);
  }
}
