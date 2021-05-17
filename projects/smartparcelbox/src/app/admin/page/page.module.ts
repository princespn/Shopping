import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { PageRoutingModule } from './page-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {MatButtonModule} from '@angular/material/button';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {DetailComponent} from './detail/detail.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {DetailModule} from '@gomcodoctor/gomco-common/detail/detail.module';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';


@NgModule({
  declarations: [ListComponent, EditComponent, DetailComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatButtonModule,
    ListModule,
    NamedRouteModule,
    FormlyFormModule,
    ContainerModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FlexModule,
    DetailModule,
    SpbCommonModule
  ]
})
export class PageModule { }
