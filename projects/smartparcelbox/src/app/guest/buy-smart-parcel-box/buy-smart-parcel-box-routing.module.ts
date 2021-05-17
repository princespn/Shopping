import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuySmartParcelBoxComponent } from './buy-smart-parcel-box.component';
import {RoutesConfig} from '@app/guest/buy-smart-parcel-box/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.buy_smart_parcel_box,
    component: BuySmartParcelBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuySmartParcelBoxRoutingModule {
}
