import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { trackById } from '@vex/utils/track-by';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import { Icon } from '@visurel/iconify-angular';
import { PopoverRef } from '@vex/components/popover/popover-ref';
import {AuthService} from '@gomcodoctor/services/auth/auth.service';
import {NavigationStart, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import icShoppingCart from '@iconify/icons-ic/twotone-shopping-cart';
import {NavigationItemProviderService} from '@gomcodoctor/services/route/navigation-item/navigation-item-provider.service';

export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: Icon;
  colorClass: string;
}

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent implements OnInit {
  icShoppingCart = icShoppingCart;
  items: MenuItem[] = [];

  trackById = trackById;
  icPerson = icPerson;
  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icArrowDropDown = icArrowDropDown;
  icBusiness = icBusiness;
  icVerifiedUser = icVerifiedUser;
  icLock = icLock;
  icNotificationsOff = icNotificationsOff;
  user;

  constructor(private cd: ChangeDetectorRef,
              private popoverRef: PopoverRef<ToolbarUserDropdownComponent>,
              private authService: AuthService,
              private router: Router, private navigationItemProviderService: NavigationItemProviderService) { }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.user = user;
      this.cd.markForCheck();
    });

    this.router.events.pipe(
        filter((e): e is RouterEvent => e instanceof NavigationStart)
    ).subscribe((e: RouterEvent) => {
      this.close();
    });

    this.items = this.navigationItemProviderService.dropDownToolbarNavigationItems();
  }

  // setStatus(status: OnlineStatus) {
  //   this.activeStatus = status;
  //   this.cd.markForCheck();
  // }

  close() {
    this.popoverRef.close();
  }

  logout() {
    this.close();
    this.authService.invalidate();
  }
}
