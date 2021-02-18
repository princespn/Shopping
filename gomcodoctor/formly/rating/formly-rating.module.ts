import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import {BarRatingModule} from 'ngx-bar-rating';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [RatingComponent],
    imports: [
        CommonModule,
        BarRatingModule,
        ReactiveFormsModule,
        FormlyModule.forChild({
            types: [
                {
                    name: 'rating',
                    // wrappers: ['form-field'],
                    component: RatingComponent,
                    defaultOptions: {
                        defaultValue: [],
                    },
                }
            ],
        }),
        FlexLayoutModule,
    ]
})
export class FormlyRatingModule { }
