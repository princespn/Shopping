import { NgModule } from '@angular/core';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [ContactUsComponent],
    imports: [
        ContactUsRoutingModule,
        FlexLayoutModule
    ]
})
export class ContactUsModule {
}
