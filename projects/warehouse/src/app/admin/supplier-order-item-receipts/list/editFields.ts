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
            key: 'quantityPerBox',
            type: 'input',
            templateOptions: {
              label: 'Quantity Per Box',
              placeholder: 'Quantity Per Box',
              required: true,
              type: 'number'
            },
          },
          {
            key: 'numberOfBox',
            type: 'input',
            templateOptions: {
              label: 'Number of Box',
              placeholder: 'Number of Box',
              required: true,
              type: 'number'
            },
          },
          {
            key: 'quantity',
            type: 'input',
            templateOptions: {
              label: 'Quantity',
              placeholder: 'Quantity',
              required: true,
              type: 'number'
            },
          }
        ]
    }
  ];
}
