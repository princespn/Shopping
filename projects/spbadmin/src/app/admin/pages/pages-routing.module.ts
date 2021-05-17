import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';


const routes: Routes = [{
    ...RoutesConfig.pages_list,
    component: ListComponent
},
  {
    ...RoutesConfig.pages_edit,
    component: ListComponent
  },
  {
    ...RoutesConfig.pages_create,
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
