import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@vexs/layout/layout.module';
import { CustomLayoutComponent } from './custom-layout.component';
import { SidenavModule } from '@vexs/layout/sidenav/sidenav.module';
import { ToolbarModule } from '@vexs/layout/toolbar/toolbar.module';
import { FooterModule } from '@vexs/layout/footer/footer.module';
import { ConfigPanelModule } from '@vexs/components/config-panel/config-panel.module';
import { SidebarModule } from '@vexs/components/sidebar/sidebar.module';
import { QuickpanelModule } from '@vexs/layout/quickpanel/quickpanel.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [CustomLayoutComponent],
  exports: [
    CustomLayoutComponent
  ],
    imports: [
        CommonModule,
        LayoutModule,
        SidenavModule,
        ToolbarModule,
        FooterModule,
        ConfigPanelModule,
        SidebarModule,
        QuickpanelModule,
        RouterModule
    ]
})
export class CustomLayoutModule {
}
