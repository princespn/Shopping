import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatButtonModule} from '@angular/material/button';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {NotificationsRoutingModule} from './notifications-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ ListComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    ListModule,
    MatButtonModule,
    NamedRouteModule,
    FormlyFormModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    IconModule,
    FlexModule,
    MatListModule
  ]
})
export class NotificationsModule { }
