import { NgModule } from '@angular/core';
import { MyShoppingRoutingModule } from './my-shopping-routing.module';
import { MyShoppingComponent } from './my-shopping.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [MyShoppingComponent],
  imports: [
    MyShoppingRoutingModule,
    FlexLayoutModule,
  ]
})
export class MyShoppingModule {
}
