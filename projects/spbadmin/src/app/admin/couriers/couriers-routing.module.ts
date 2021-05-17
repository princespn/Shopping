import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from '@app/admin/couriers/list/list.component';
import {RoutesConfig} from '@app/admin/couriers/routesConfig';



const routes: Routes = [{
...RoutesConfig.couriers_list,
  component: ListComponent

},
  {
    ...RoutesConfig.couriers_edit,
    component: ListComponent

  }, {
    ...RoutesConfig.couriers_create,
    component: ListComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouriersRoutingModule { }
