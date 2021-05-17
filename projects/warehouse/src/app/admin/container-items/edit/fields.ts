import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
          {
            key: 'barcode',
            type: 'input',
            templateOptions: {
              label: 'Barcode',
              placeholder: 'Barcode',
              required: true,
            },
          },
        {
            key: 'quantity',
            type: 'input',
            templateOptions: {
              label: 'Quantity',
              placeholder: 'quantity',
              required: true,
            },
          },
        {
            key: 'numberOfBox',
            type: 'input',
            templateOptions: {
              label: 'Number Of Box',
              placeholder: 'Number Of Box',
              required: true,
            },
          },
        {
            key: 'syncToErp',
            type: 'checkbox',
            templateOptions: {
              label: 'syncToErp',
              placeholder: 'syncToErp',
              required: true,
            },
          }
      ],
    }
  ];
}
