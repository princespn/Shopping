import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {ListComponent} from './list/list.component';
import {DetailComponent} from '@app/admin/servicerequests/detail/detail.component';
// @ts-ignore
import {UploadComponent} from '@app/admin/servicerequests/detail/upload/upload.component';

const routes: Routes = [{
  ...RoutesConfig.servicerequests_list,
  component: ListComponent
},
  {
  ...RoutesConfig.servicerequests_detail,
  component: DetailComponent
},
  {
    ...RoutesConfig.servicerequests_upload,
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicerequestsRoutingModule { }
