import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportedCouriersComponent } from './supported-couriers.component';
import {RoutesConfig} from '@app/guest/supported-couriers/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.supported_couriers,
    component: SupportedCouriersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportedCouriersRoutingModule {
}
