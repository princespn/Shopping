import {Inject, Injectable, InjectionToken} from '@angular/core';

import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';
import {NavigationService} from '@vex/services/navigation.service';
import {AuthService} from '@gomcodoctor/services/auth/auth.service';

export const APP_NAV_CONFIG = new InjectionToken('app.navigation.config');

@Injectable({
  providedIn: 'root',
})
export class NavigationItemProviderService {
  private config: any;

  constructor(private namedRoutesService: NamedRoutesService,
              private navigationService: NavigationService,
              private authService: AuthService,
              @Inject(APP_NAV_CONFIG) config) {
    this.config = config;
  }

  adminItems(){
    return this.config.AdminItems(this.namedRoutesService);
  }

  guestItems(){
    return this.config.GuestItems(this.namedRoutesService, this.authService.isAuthenticated);
  }

  emitGuestItems(){
    this.navigationService.navigationItemsSubject.next(this.guestItems());
  }

  emitAdminItems(){
    this.navigationService.navigationItemsSubject.next(this.adminItems());
  }

}
