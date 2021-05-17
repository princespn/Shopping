import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelProductRoutingModule } from './channel-product-routing.module';
import { ListComponent } from './list/list.component';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';


@NgModule({
  declarations: [ListComponent],
    imports: [
        CommonModule,
        ChannelProductRoutingModule,
        ListModule,
        NamedRouteModule,
        MatCheckboxModule,
        MatCardModule,
        FlexLayoutModule,
        MatButtonModule,
        FormlyFormModule
    ]
})
export class ChannelProductModule { }
