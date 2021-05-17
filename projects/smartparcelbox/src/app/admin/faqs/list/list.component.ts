import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'homescapes-faqs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {

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
