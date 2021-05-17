import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutesConfig} from './routesConfig';
import {PagesComponent} from './pages.component';

const routes: Routes = [{
    ...RoutesConfig.page_detail,
    component: PagesComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
