import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {DetailComponent} from './detail/detail.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [{
  ...RoutesConfig.parcel_detail,
  component: DetailComponent
},
  {
    ...RoutesConfig.parcel_edit,
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartParcelBoxRoutingModule { }
