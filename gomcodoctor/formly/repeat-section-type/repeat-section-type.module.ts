import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RepeatTypeComponent} from './repeat-section.type';
import {FormlyModule} from '@ngx-formly/core';

@NgModule({
  declarations: [RepeatTypeComponent],
  imports: [
    CommonModule,
    FormlyModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          // wrappers: ['form-field'],
          component: RepeatTypeComponent,
          defaultOptions: {
            defaultValue: [],
          },
        }
      ],
    }),
  ]
})
export class RepeatSectionTypeModule { }
