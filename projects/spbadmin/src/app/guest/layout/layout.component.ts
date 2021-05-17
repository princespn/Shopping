import { Component, OnInit } from '@angular/core';
import {ConfigService} from '@vexs/services/config.service';
import {ConfigName} from '@vexs/interfaces/config-name.model';
import {Style, StyleService} from '@vexs/services/style.service';
import {NavigationItemProviderService} from '@gomcodoctor/services/route/navigation-item/navigation-item-provider.service';
import {AuthService} from '@gomcodoctor/services/auth';

@Component({
  selector: 'gomco-layout-frontend',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private configService: ConfigService, private authService: AuthService,
              private styleService: StyleService, private navigationItemProviderService: NavigationItemProviderService) {
    this.configService.setConfig(ConfigName.ikaros);
    this.styleService.setStyle(Style.light);
  }

  ngOnInit(): void {
    this.navigationItemProviderService.emitGuestItems();
    this.authService.user.subscribe((value) => {
      this.navigationItemProviderService.emitGuestItems();
    });
  }

}
