import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {LoadingModule} from '@gomcodoctor/gomco-common/loading/loading.module';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';
import {DetailModule} from "@gomcodoctor/gomco-common/detail/detail.module";


@NgModule({
  declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ContainerModule,
        LoadingModule,
        MatCardModule,
        FlexLayoutModule,
        SpbCommonModule,
        DetailModule
    ]
})
export class PagesModule { }
