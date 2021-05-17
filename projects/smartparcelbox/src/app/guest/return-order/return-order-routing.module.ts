import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnOrderComponent } from './return-order.component';
import {RoutesConfig} from '@app/guest/return-order/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.return_order,
    component: ReturnOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnOrderRoutingModule {
}
