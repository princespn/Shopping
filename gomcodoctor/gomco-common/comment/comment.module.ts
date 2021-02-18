import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {FormlyFormModule} from "@gomcodoctor/gomco-common/formly-form/formly-form.module";
import {OperationModule} from "@gomcodoctor/services/schema/pipes/operation/operation.module";
import {PaginationControlsModule} from "@gomcodoctor/gomco-common/pagination-controls/pagination-controls.module";
import {NgxPaginationModule} from "ngx-pagination";
import {BarRatingModule} from "ngx-bar-rating";



@NgModule({
    declarations: [ListComponent, FormComponent],
    exports: [
        FormComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        FormlyFormModule,
        OperationModule,
        PaginationControlsModule,
        NgxPaginationModule,
        BarRatingModule
    ]
})
export class CommentModule { }
