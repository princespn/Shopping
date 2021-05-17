import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';


const routes: Routes = [{
  ...RoutesConfig.channel_list,
  component: ListComponent
},
  {
    ...RoutesConfig.channel_edit,
    component: ListComponent
  },
  {
    ...RoutesConfig.channel_create,
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
