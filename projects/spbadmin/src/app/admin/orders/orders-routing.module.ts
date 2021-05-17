import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from '@app/admin/orders/edit/edit.component';

const routes: Routes = [{
  ...RoutesConfig.orders_list,
  component: ListComponent
},
  {
    ...RoutesConfig.orders_edit,
    component: EditComponent
  },
  {
    ...RoutesConfig.orders_create,
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
