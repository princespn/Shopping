import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [{
  ...RoutesConfig.settings_list,
  component: ListComponent
},
  {
  ...RoutesConfig.settings_edit,
  component: EditComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
