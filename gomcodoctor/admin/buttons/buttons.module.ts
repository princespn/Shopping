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


@NgModule({
  declarations: [DeleteButtonComponent, EditButtonComponent, ToggleButtonComponent, BulkDeleteButtonComponent],
  exports: [
    DeleteButtonComponent,
    EditButtonComponent,
    BulkDeleteButtonComponent,
    ToggleButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NullishCoalesceModule,
    RouterModule,
    NamedRouteModule
  ]
})
export class ButtonsModule { }
