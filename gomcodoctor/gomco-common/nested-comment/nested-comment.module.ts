import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedCommentComponent } from './nested-comment.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {FormlyFormModule} from "@gomcodoctor/gomco-common/formly-form/formly-form.module";
import {OperationModule} from "@gomcodoctor/services/schema/pipes/operation/operation.module";
import {MatButtonModule} from "@angular/material/button";
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";
import {NamedRouteModule} from "@gomcodoctor/_helper/named-route/named-route.module";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [NestedCommentComponent, FormComponent],
  exports: [
    NestedCommentComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    FormlyFormModule,
    OperationModule,
    MatButtonModule,
    RouterModule,
    NamedRouteModule,
    MatMenuModule
  ]
})
export class NestedCommentModule { }
