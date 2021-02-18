import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [{
  ...RoutesConfig.supplier_product_list,
  component: ListComponent
},
  {
    ...RoutesConfig.supplier_product_edit,
    component: EditComponent
  },
  {
    ...RoutesConfig.supplier_product_create,
    component: EditComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierProductRoutingModule { }
