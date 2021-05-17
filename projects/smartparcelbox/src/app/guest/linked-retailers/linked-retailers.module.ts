import { NgModule } from '@angular/core';
import { LinkedRetailersRoutingModule } from './linked-retailers-routing.module';
import { LinkedRetailersComponent } from './linked-retailers.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [LinkedRetailersComponent],
  imports: [
    LinkedRetailersRoutingModule,
    FlexLayoutModule,
  ]
})
export class LinkedRetailersModule {
}
