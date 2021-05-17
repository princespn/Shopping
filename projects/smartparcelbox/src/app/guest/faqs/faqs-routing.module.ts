import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './faqs.component';
import {RoutesConfig} from '@app/guest/faqs/routesConfig';


const routes: Routes = [
  {
    ...RoutesConfig.faqs,
    component: FaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsRoutingModule {
}
