import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedRetailersComponent } from './linked-retailers.component';
import {RoutesConfig} from '@app/guest/linked-retailers/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.linked_retailers,
    component: LinkedRetailersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedRetailersRoutingModule {
}
