import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [{
  ...RoutesConfig.signout_detail,
  component: DetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignoutRoutingModule { }
