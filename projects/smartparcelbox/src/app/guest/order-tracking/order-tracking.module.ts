import { NgModule } from '@angular/core';
import { OrderTrackingRoutingModule } from './order-tracking-routing.module';
import { OrderTrackingComponent } from './order-tracking.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [OrderTrackingComponent],
    imports: [
        OrderTrackingRoutingModule,
        FlexLayoutModule
    ]
})
export class OrderTrackingModule {
}
