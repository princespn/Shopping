import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSmartParcelBoxComponent } from './register-smart-parcel-box.component';
import {RoutesConfig} from '@app/guest/register-smart-parcel-box/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.register_smart_parcel_box,
    component: RegisterSmartParcelBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterSmartParcelBoxRoutingModule {
}
