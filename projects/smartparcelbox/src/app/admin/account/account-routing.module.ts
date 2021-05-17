import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {EditComponent} from './edit/edit.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ActivityComponent} from './activity/activity.component';
import {ChangeEmailUserNameComponent} from '@app/admin/account/change-email-user-name/change-email-user-name.component';

const routes: Routes = [{
  ...RoutesConfig.account_edit,
  component: EditComponent
},
  {
    ...RoutesConfig.change_password,
    component: ChangePasswordComponent
  },
  {
    ...RoutesConfig.change_user_name,
    component: ChangeEmailUserNameComponent
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
