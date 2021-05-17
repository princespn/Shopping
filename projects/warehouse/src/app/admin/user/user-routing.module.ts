import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [{
    ...RoutesConfig.user_list,
    component: ListComponent
},
  {
    ...RoutesConfig.user_edit,
    component: EditComponent
  },
    {
        ...RoutesConfig.user_create,
        component: EditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
