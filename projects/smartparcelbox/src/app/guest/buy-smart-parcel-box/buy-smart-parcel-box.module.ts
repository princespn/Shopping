import { NgModule } from '@angular/core';
import { BuySmartParcelBoxRoutingModule } from './buy-smart-parcel-box-routing.module';
import { BuySmartParcelBoxComponent } from './buy-smart-parcel-box.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [BuySmartParcelBoxComponent],
  imports: [
    BuySmartParcelBoxRoutingModule,
    FlexLayoutModule,
  ]
})
export class BuySmartParcelBoxModule {
}
