import { NgModule } from '@angular/core';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    AboutUsRoutingModule,
    FlexLayoutModule,
    SpbCommonModule,
    MatCardModule,
  ]
})
export class AboutUsModule {
}
