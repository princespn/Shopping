import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatCardModule} from '@angular/material/card';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import {DetailModule} from '@gomcodoctor/gomco-common/detail/detail.module';


@NgModule({
  declarations: [EditComponent, ListComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FlexLayoutModule,
    MatCheckboxModule,
    NamedRouteModule,
    ListModule,
    MatCardModule,
    FormlyFormModule,
    MatButtonModule,
    MatDialogModule,
    ButtonsModule,
    MatGridListModule,
    NgxGalleryModule,
    DetailModule
  ]
})
export class ContainerModule { }
