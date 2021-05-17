import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectRetailerProgramComponent } from './connect-retailer-program.component';
import {RoutesConfig} from '@app/guest/connect-retailer-program/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.register_smart_parcel_box,
    component: ConnectRetailerProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRetailerProgramRoutingModule {
}
