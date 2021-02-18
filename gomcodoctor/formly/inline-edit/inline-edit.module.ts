import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineInputEditComponent } from './inline-input-edit/inline-input-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
  ],
  declarations: [InlineInputEditComponent],
  exports: [InlineInputEditComponent]
})
export class InlineEditModule { }
