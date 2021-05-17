import {FormlyFieldConfig} from '@ngx-formly/core';


export function ItemFields(): FormlyFieldConfig[] {
  return [
    {
        fieldGroup: [
          {
            key: 'title',
            type: 'input',
            templateOptions: {
              label: 'Item Name',
              placeholder: 'Item Name',
              required: true,
              appearance: 'legacy'
            },
          },
          {
            key: 'unitPrice',
            type: 'input',
            templateOptions: {
              label: 'Price',
              placeholder: 'Price',
              required: true,
              appearance: 'legacy',
              type: 'number'
            },
          },
          {
            key: 'quantity',
            type: 'input',
            templateOptions: {
              label: 'Quantity',
              type: 'number',
              placeholder: 'Quantity',
              required: true,
              appearance: 'legacy'
            },
          }
          ]
    }
  ];
}
