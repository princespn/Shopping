import { NgModule } from '@angular/core';
import { ConnectRetailerProgramRoutingModule } from './connect-retailer-program-routing.module';
import { ConnectRetailerProgramComponent } from './connect-retailer-program.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [ConnectRetailerProgramComponent],
  imports: [
    ConnectRetailerProgramRoutingModule,
    FlexLayoutModule,
  ]
})
export class ConnectRetailerProgramModule {
}
