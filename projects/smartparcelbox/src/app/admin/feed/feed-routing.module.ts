import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [{
  ...RoutesConfig.feed_list,
  component: ListComponent
},
  {
    ...RoutesConfig.feed_edit,
    component: EditComponent
  },
  {
    ...RoutesConfig.feed_create,
    component: EditComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
