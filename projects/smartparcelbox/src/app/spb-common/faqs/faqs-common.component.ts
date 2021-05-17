import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'spb-faqs-list',
  templateUrl: './faqs-common.component.html',
  styleUrls: ['./faqs-common.component.scss']
})
export class FaqsCommonComponent  {

  resourcePath = 'faqs';
  resource = 'faqs';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'name',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'name',
            required: false,
          },
        }
      ]
    }
  ];

}
