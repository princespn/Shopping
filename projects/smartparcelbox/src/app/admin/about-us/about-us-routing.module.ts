import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import {RoutesConfig} from '@app/admin/about-us/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.about_us,
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
