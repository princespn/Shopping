import { NgModule } from '@angular/core';
import { ReturnOrderRoutingModule } from './return-order-routing.module';
import { ReturnOrderComponent } from './return-order.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ReturnOrderComponent],
  imports: [
    ReturnOrderRoutingModule,
    FlexLayoutModule,
  ]
})
export class ReturnOrderModule {
}
