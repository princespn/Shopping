import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {EditComponent} from './edit/edit.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ActivityComponent} from './activity/activity.component';

const routes: Routes = [{
  ...RoutesConfig.account_edit,
  component: EditComponent
},
  {
    ...RoutesConfig.change_password,
    component: ChangePasswordComponent
  },
  {
    ...RoutesConfig.activities,
    component: ActivityComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
