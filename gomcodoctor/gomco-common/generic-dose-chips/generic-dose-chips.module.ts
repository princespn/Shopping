import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericDoseChipsComponent} from '@gomcodoctor/gomco-common/generic-dose-chips/generic-dose-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {RouterModule} from '@angular/router';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';

@NgModule({
  declarations: [GenericDoseChipsComponent],
  exports: [
    GenericDoseChipsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    RouterModule,
    NamedRouteModule
  ]
})
export class GenericDoseChipsModule { }
