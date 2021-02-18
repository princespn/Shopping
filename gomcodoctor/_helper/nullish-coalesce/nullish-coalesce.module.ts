import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NullishCoalescePipe } from './nullish-coalesce.pipe';


@NgModule({
  declarations: [NullishCoalescePipe],
  exports: [
    NullishCoalescePipe
  ],
  imports: [
    CommonModule
  ]
})
export class NullishCoalesceModule { }
