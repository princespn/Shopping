import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierSettingRoutingModule } from './supplier-setting-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [EditComponent, ListComponent],
  imports: [
    CommonModule,
    SupplierSettingRoutingModule,
    FormlyFormModule,
    ListModule,
    NamedRouteModule,
    MatButtonModule
  ]
})
export class SupplierSettingModule { }
