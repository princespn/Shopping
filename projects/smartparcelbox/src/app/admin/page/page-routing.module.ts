import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {RoutesConfig} from './routesConfig';

const routes: Routes = [{
  component: EditComponent,
  ...RoutesConfig.page_edit
},
  {
    component: EditComponent,
    ...RoutesConfig.page_create
  },
  {
    component: ListComponent,
    ...RoutesConfig.page_list
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
