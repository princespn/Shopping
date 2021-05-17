import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from '@app/admin/countries/list/list.component';


const routes: Routes = [{
    ...RoutesConfig.countries_list,
  component: ListComponent
},
  {
    ...RoutesConfig.countries_edit,
    component: ListComponent
  },
  {
    ...RoutesConfig.countries_create,
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
