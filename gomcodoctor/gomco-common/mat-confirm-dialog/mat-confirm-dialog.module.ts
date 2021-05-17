import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatConfirmDialogComponent } from './mat-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {IconModule} from "@visurel/iconify-angular";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [MatConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    FlexLayoutModule
  ]
})
export class MatConfirmDialogModule { }
