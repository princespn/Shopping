import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from '@app/admin/return-process/list/list.component';

const routes: Routes = [{
    ...RoutesConfig.return_process_list,
  component: ListComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnProcessRoutingModule { }
