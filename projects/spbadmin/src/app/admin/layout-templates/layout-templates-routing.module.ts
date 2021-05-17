import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from '@app/admin/layout-templates/list/list.component';
import {RoutesConfig} from '@app/admin/layout-templates/routesConfig';

const routes: Routes = [{
...RoutesConfig.layout_templates_list,
  component: ListComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutTemplatesRoutingModule { }
