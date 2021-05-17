import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfigService} from '@vexs/services/config.service';
import {ConfigName} from '@vexs/interfaces/config-name.model';
import {Style, StyleService} from '@vexs/services/style.service';
import {NavigationItemProviderService} from '@gomcodoctor/services/route/navigation-item/navigation-item-provider.service';

@Component({
  selector: 'gomco-admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  titleToolBar;
  constructor(private configService: ConfigService, private styleService: StyleService,
              private navigationItemProviderService: NavigationItemProviderService) {
    this.configService.setConfig(ConfigName.zeus);
    this.styleService.setStyle(Style.default);
    this.configService.updateConfig({footer: {
      visible: false
    }});
  }

  ngOnInit(): void {
    this.navigationItemProviderService.emitAdminItems();
  }
}
