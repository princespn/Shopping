import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import {FormlyFieldTypeaheadComponent} from '@gomcodoctor/formly/typehead/typeahead.type.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [FormlyFieldTypeaheadComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'typehead',
          // wrappers: ['form-field'],
          component: FormlyFieldTypeaheadComponent,
          defaultOptions: {
            defaultValue: [],
          },
        }
      ],
    }),
    NgSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class FormlyTypeheadModule {}
