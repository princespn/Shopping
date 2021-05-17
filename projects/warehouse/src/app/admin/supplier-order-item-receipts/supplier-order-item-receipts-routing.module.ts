import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';

const routes: Routes = [{
    ...RoutesConfig.product_list,
    component: ListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierOrderItemReceiptsRoutingModule { }
