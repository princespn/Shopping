import { NgModule } from '@angular/core';
import { SupportedCouriersRoutingModule } from './supported-couriers-routing.module';
import { SupportedCouriersComponent } from './supported-couriers.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [SupportedCouriersComponent],
  imports: [
    SupportedCouriersRoutingModule,
    FlexLayoutModule,
  ]
})
export class SupportedCouriersModule {
}
