import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';

const routes: Routes = [{
  ...RoutesConfig.orders_list,
  component: ListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderItemSelectionRoutingModule { }
