import { NgModule } from '@angular/core';
import { RegisterSmartParcelBoxRoutingModule } from './register-smart-parcel-box-routing.module';
import { RegisterSmartParcelBoxComponent } from './register-smart-parcel-box.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [RegisterSmartParcelBoxComponent],
  imports: [
    RegisterSmartParcelBoxRoutingModule,
    FlexLayoutModule,
  ]
})
export class RegisterSmartParcelBoxModule {
}
