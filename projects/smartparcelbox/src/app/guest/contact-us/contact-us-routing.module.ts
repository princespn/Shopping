import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import {RoutesConfig} from '@app/guest/contact-us/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.contact_us,
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule {
}
