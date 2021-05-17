import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatButtonModule} from '@angular/material/button';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {OrdersRoutingModule} from './orders-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';


@NgModule({
  declarations: [EditComponent, ListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ListModule,
    MatButtonModule,
    NamedRouteModule,
    FormlyFormModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    IconModule,
    FlexModule,
    MatListModule,
    SpbCommonModule,
    ButtonsModule
  ]
})
export class OrdersModule { }
