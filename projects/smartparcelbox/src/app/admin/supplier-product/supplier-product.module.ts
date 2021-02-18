import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierProductRoutingModule } from './supplier-product-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatButtonModule} from '@angular/material/button';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';


@NgModule({
  declarations: [EditComponent, ListComponent],
  imports: [
    CommonModule,
    SupplierProductRoutingModule,
    ListModule,
    MatButtonModule,
    FormlyFormModule,
    NamedRouteModule
  ]
})
export class SupplierProductModule { }
