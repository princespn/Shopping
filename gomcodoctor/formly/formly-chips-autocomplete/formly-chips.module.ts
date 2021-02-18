import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormlyChipsComponent} from '@gomcodoctor/formly/formly-chips-autocomplete/formly-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [FormlyChipsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'chips',
          wrappers: ['form-field'],
          component: FormlyChipsComponent,
          defaultOptions: {
            defaultValue: [],
          },
        }
      ],
    }),
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
})
export class FormlyChipsModule {}
