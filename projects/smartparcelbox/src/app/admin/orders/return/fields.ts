import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(items): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'units',
          type: 'repeat',
          fieldArray: {
            fieldGroup: [
              {
                key: 'quantity',
                type: 'input',
                wrappers: ['selectItem', 'form-field'],
                templateOptions: {
                  items,
                  label: 'quantity',
                  placeholder: 'quantity',
                  required: true,
                  appearance: 'outline',
                  type: 'number',
                  min: 1
                },
              }],
          }
        },
        {
          key: 'courierTracking',
          fieldGroup: [
            {
              key: 'number',
              type: 'input',
              templateOptions: {
                label: 'Tracking No',
                placeholder: 'Tracking No.',
                required: true,
                appearance: 'legacy'
              },
            },
            {
              key: 'courier',
              type: 'typehead',
              templateOptions: {
                label: 'Courier',
                placeholder: 'Courier',
                required: true,
                optionsResource: 'couriers',
                bindLabel: 'name',
                searchVariable: 'name',
                appearance: 'legacy',
                // defaultFilter: {active: true},
                bindValue: '@id',
                getIntialList: true
              }
            }
          ],
        }
      ]
    }
  ];
}
