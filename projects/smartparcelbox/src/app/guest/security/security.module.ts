import { NgModule } from '@angular/core';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [SecurityComponent],
  imports: [
    SecurityRoutingModule,
    FlexLayoutModule,
  ]
})
export class SecurityModule {
}
