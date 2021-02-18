import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [{
  ...RoutesConfig.channel_setting_list,
  component: ListComponent
},
  {
    ...RoutesConfig.channel_setting_edit,
    component: EditComponent
  },
  {
    ...RoutesConfig.channel_setting_create,
    component: EditComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelSettingRoutingModule { }
