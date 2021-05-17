import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductStockLogRoutingModule } from './product-stock-log-routing.module';
import { ListComponent } from './list/list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ProductStockLogRoutingModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    ListModule
  ]
})
export class ProductStockLogModule { }
