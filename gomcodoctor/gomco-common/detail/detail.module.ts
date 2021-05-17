import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail.component';
import {LoadingModule} from "@gomcodoctor/gomco-common/loading/loading.module";

@NgModule({
  declarations: [DetailComponent],
  exports: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
  ]
})
export class DetailModule { }
