import { NgModule } from '@angular/core';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';



@NgModule({
  declarations: [FaqsComponent],
  imports: [
    FaqsRoutingModule,
    FlexLayoutModule,
    SpbCommonModule,
  ]
})
export class FaqsModule {
}
