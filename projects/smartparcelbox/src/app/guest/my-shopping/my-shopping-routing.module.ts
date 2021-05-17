import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyShoppingComponent } from './my-shopping.component';
import {RoutesConfig} from '@app/guest/my-shopping/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.my_shopping,
    component: MyShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyShoppingRoutingModule {
}
