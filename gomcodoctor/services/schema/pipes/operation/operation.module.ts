import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationPipe } from './operation.pipe';



@NgModule({
  declarations: [OperationPipe],
  exports: [
    OperationPipe
  ],
  imports: [
    CommonModule
  ]
})
export class OperationModule { }
