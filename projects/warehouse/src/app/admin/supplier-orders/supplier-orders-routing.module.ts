import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {UploadComponent} from './upload/upload.component';

const routes: Routes = [{
    ...RoutesConfig.product_list,
    component: ListComponent
},
  {
    ...RoutesConfig.product_edit,
    component: EditComponent
  },
  {
    ...RoutesConfig.suppliers_orders_upload,
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierOrdersRoutingModule { }
