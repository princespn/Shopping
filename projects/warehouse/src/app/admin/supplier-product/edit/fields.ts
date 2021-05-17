import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      type: 'tabs',
      fieldGroup: [{
        templateOptions: {label: 'Basic'},
        fieldGroup: [
          {
            key: 'stock',
            type: 'input',
            templateOptions: {
              label: 'stock',
              placeholder: 'stock',
              required: true,
              type : 'number',
            },
          },
          {
            key: 'price',
            type: 'input',
            templateOptions: {
              label: 'price',
              placeholder: 'price',
              required: true,
              type : 'number',
            },
          },
          {
            key: 'deleted',
            type: 'toggle',
            templateOptions: {
              label: 'deleted',
              placeholder: 'deleted',
              required: false,
            },
          }
        ]
      },
      ],
    }
  ];
}
