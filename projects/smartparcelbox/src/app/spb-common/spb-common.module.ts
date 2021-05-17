import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { GuestFooterComponent } from './guest-footer/guest-footer.component';
import { FaqsCommonComponent } from './faqs/faqs-common.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {IconModule} from '@visurel/iconify-angular';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {MatButtonModule} from '@angular/material/button';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {AboutCommonComponent} from '@app/spb-common/about-us/about-common.component';



@NgModule({
  declarations: [BackButtonComponent, GuestFooterComponent, FaqsCommonComponent, AboutCommonComponent],
  exports: [
    BackButtonComponent,
    GuestFooterComponent,
    FaqsCommonComponent,
    AboutCommonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    IconModule,
    FlexLayoutModule,
    MatMenuModule,
    RouterModule,
    NamedRouteModule,
    MatButtonModule,
    ListModule,
    MatExpansionModule
  ]
})
export class SpbCommonModule { }
