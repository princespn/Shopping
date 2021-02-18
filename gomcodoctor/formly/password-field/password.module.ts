import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {PasswordTypeComponent} from '@gomcodoctor/formly/password-field/password.type';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [PasswordTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'visiblePassword',
          component: PasswordTypeComponent,
          wrappers: ['form-field'],
        }
      ],
    }),
    MatIconModule,
  ],
})
export class PasswordModule {}
