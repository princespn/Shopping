import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedValuePipe } from './nested-value.pipe';

@NgModule({
  declarations: [NestedValuePipe],
  exports: [
    NestedValuePipe
  ],
  imports: [
    CommonModule
  ]
})
export class NestedValueModule { }
