import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {RoutesConfig} from '@app/guest/security/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.security,
    component: SecurityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
