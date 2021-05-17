import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTrackingComponent } from './order-tracking.component';
import {RoutesConfig} from '@app/guest/order-tracking/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.order_tracking,
    component: OrderTrackingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderTrackingRoutingModule {
}
