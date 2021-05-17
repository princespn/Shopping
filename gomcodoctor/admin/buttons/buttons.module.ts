import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { BulkDeleteButtonComponent } from './bulk-delete-button/bulk-delete-button.component';
import {MatButtonModule} from '@angular/material/button';
import {NullishCoalesceModule} from '@gomcodoctor/_helper/nullish-coalesce/nullish-coalesce.module';
import {RouterModule} from '@angular/router';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {DialogFormButtonComponent} from '@gomcodoctor/admin/buttons/dialog-form-button/dialog-form-button.component';
import {UpdateButtonComponent} from '@gomcodoctor/admin/buttons/update-button/update-button.component';
import {MatMenuModule} from '@angular/material/menu';
import {FlexModule} from "@angular/flex-layout";
import {LoadingModule} from "@gomcodoctor/gomco-common/loading/loading.module";


@NgModule({
  declarations: [DeleteButtonComponent, EditButtonComponent, ToggleButtonComponent, BulkDeleteButtonComponent, DialogFormButtonComponent, UpdateButtonComponent],
  exports: [
    DialogFormButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    BulkDeleteButtonComponent,
    ToggleButtonComponent,
    UpdateButtonComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        NullishCoalesceModule,
        RouterModule,
        NamedRouteModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        FlexModule,
        LoadingModule
    ]
})
export class ButtonsModule { }
