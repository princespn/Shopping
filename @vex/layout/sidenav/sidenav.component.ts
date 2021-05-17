import {Component, Inject, Input, OnInit} from '@angular/core';
import { trackByRoute } from '@vex/utils/track-by';
import { NavigationService } from '@vex/services/navigation.service';
import icRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import icRadioButtonUnchecked from '@iconify/icons-ic/twotone-radio-button-unchecked';
import { LayoutService } from '@vex/services/layout.service';
import { ConfigService } from '@vex/services/config.service';
import { map } from 'rxjs/operators';
import icReply from '@iconify/icons-ic/twotone-reply';
import {APP_GLOBAL_CONFIG} from '@gomcodoctor/_helper/globalConfig';

@Component({
  selector: 'vex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  icReply = icReply;
  @Input() collapsed: boolean;
  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
  title$ = this.configService.config$.pipe(map(config => config.sidenav.title));
  imageUrl$ = this.configService.config$.pipe(map(config => config.sidenav.imageUrl));
  showCollapsePin$ = this.configService.config$.pipe(map(config => config.sidenav.showCollapsePin));
  items;
  trackByRoute = trackByRoute;
  icRadioButtonChecked = icRadioButtonChecked;
  icRadioButtonUnchecked = icRadioButtonUnchecked;

  constructor(private navigationService: NavigationService,
              private layoutService: LayoutService,
              private configService: ConfigService, @Inject(APP_GLOBAL_CONFIG) public globalConfig) {}

  ngOnInit() {
    this.navigationService.navigationItemsSubject.subscribe((items) => {
      this.items = items;
    });
  }

  onMouseEnter() {
    this.layoutService.collapseOpenSidenav();
  }

  onMouseLeave() {
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
}
