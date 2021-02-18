import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormlyFieldTabsComponent} from './tabs.type';
import {MatTabsModule} from '@angular/material/tabs';
import {FormlyModule} from '@ngx-formly/core';

@NgModule({
  declarations: [FormlyFieldTabsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tabs',
          // wrappers: ['form-field'],
          component: FormlyFieldTabsComponent,
          defaultOptions: {
            defaultValue: [],
          },
        }
      ],
    }),
  ]
})
export class FormlyTabsModule { }
