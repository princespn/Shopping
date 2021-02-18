import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationControlsComponent } from './pagination-controls.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [PaginationControlsComponent],
  exports: [
    PaginationControlsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class PaginationControlsModule { }
