import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {IconModule} from '@visurel/iconify-angular';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [BackButtonComponent],
  exports: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    IconModule,
    FlexLayoutModule
  ]
})
export class SpbCommonModule { }
