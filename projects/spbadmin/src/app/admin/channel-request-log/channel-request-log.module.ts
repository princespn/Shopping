import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRequestLogRoutingModule } from './channel-request-log-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {MatButtonModule} from '@angular/material/button';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';


@NgModule({
  declarations: [EditComponent, ListComponent],
  imports: [
    CommonModule,
    ChannelRequestLogRoutingModule,
    FormlyFormModule,
    MatButtonModule,
    ListModule,
    NamedRouteModule
  ]
})
export class ChannelRequestLogModule { }
