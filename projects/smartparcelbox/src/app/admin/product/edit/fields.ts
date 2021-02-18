import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      type: 'tabs',
      fieldGroup: [{
        templateOptions: {label: 'Basic'},
        fieldGroup: [
          {
            key: 'asin',
            type: 'input',
            templateOptions: {
              label: 'asin',
              placeholder: 'asin',
              required: true,
            },
          },
          {
            key: 'upc',
            type: 'input',
            templateOptions: {
              label: 'upc',
              placeholder: 'upc',
              required: true,
            },
          },
        ]
      },
      ],
    }
  ];
}
