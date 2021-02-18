import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillTypeComponent } from './quill.type.component';
import {FormlyModule} from '@ngx-formly/core';
import {QuillModule as BaseQuillModule} from 'ngx-quill';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [QuillTypeComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'quill',
          wrappers: ['form-field'],
          component: QuillTypeComponent,
          defaultOptions: {
            defaultValue: [],
          },
        }
      ],
    }),
    BaseQuillModule,
    ReactiveFormsModule,
  ]
})
export class QuillTypeModule { }
