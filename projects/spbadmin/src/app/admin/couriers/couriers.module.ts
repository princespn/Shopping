import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatCardModule} from '@angular/material/card';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ListComponent} from '@app/admin/couriers/list/list.component';
import {CouriersRoutingModule} from '@app/admin/couriers/couriers-routing.module';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CouriersRoutingModule,
    FlexLayoutModule,
    MatCheckboxModule,
    NamedRouteModule,
    ListModule,
    MatCardModule,
    FormlyFormModule,
    ButtonsModule
  ]
})
export class CouriersModule { }
