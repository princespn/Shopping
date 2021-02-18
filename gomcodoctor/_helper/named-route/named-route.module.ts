import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NamedRoutePipePipe} from '@gomcodoctor/_helper/named-route/named-route-pipe.pipe';



@NgModule({
  declarations: [NamedRoutePipePipe],
  exports: [
    NamedRoutePipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class NamedRouteModule { }
