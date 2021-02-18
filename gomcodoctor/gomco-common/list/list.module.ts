import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from '@gomcodoctor/gomco-common/list/list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {RouterModule} from '@angular/router';
import {GenericDoseChipsModule} from '@gomcodoctor/gomco-common/generic-dose-chips/generic-dose-chips.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {ContainerModule} from '@vex/directives/container/container.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {PaginationControlsModule} from '@gomcodoctor/gomco-common/pagination-controls/pagination-controls.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoadingModule} from '@gomcodoctor/gomco-common/loading/loading.module';
import {NestedValueModule} from '@gomcodoctor/_helper/nested-value/nested-value.module';
import {NullishCoalesceModule} from '@gomcodoctor/_helper/nullish-coalesce/nullish-coalesce.module';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';
import {IconModule} from '@visurel/iconify-angular';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListComponent],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormlyFormModule,
    RouterModule,
    GenericDoseChipsModule,
    MatCheckboxModule,
    MatCardModule,
    ContainerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NamedRouteModule,
    PaginationControlsModule,
    NgxPaginationModule,
    LoadingModule,
    NestedValueModule,
    NullishCoalesceModule,
    ButtonsModule,
    IconModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    FormsModule
  ]
})
export class ListModule { }
