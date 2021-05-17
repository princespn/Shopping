import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from '@app/admin/email-templates/list/list.component';
import {RoutesConfig} from '@app/admin/email-templates/routesConfig';


const routes: Routes = [{
...RoutesConfig.email_templates_list,
  component: ListComponent

},
  {
    ...RoutesConfig.email_templates_edit,
    component: ListComponent

  },
  {
    ...RoutesConfig.email_templates_create,
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailTemplatesRoutingModule { }
