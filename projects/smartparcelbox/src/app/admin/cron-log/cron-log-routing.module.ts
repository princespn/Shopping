import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [{
  ...RoutesConfig.cron_log_list,
  component: ListComponent
},
  {
    ...RoutesConfig.cron_log_edit,
    component: EditComponent
  },
  {
    ...RoutesConfig.cron_log_create,
    component: EditComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronLogRoutingModule { }
