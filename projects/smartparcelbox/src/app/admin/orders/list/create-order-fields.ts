import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(maxDate): FormlyFieldConfig[] {
  return [
    {
        fieldGroup: [
          {
            key: 'channelOrderId',
            type: 'input',
            templateOptions: {
              label: 'Order no',
              placeholder: 'Order no',
              required: true,
              appearance: 'legacy'
            },
          },
          {
            key: 'channel',
            type: 'typehead',
            templateOptions: {
              label: 'Retailer',
              placeholder: 'Select Retailer',
              required: true,
              appearance: 'legacy',
              optionsResource: 'channels',
              bindLabel: 'name',
              bindValue: '@id',
              defaultFilter: {managed: 'false'},
              searchVariable: 'name',
              getIntialList: true
            },
          },
          {
            key: 'shipments',
            type: 'repeat',
            fieldArray: {
              fieldGroup: [
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
                        bindValue: '@id',
                        getIntialList: true
                      }
                    }
                  ],
                }
              ]
            },
          },
          {
            key: 'createdAt',
            type: 'datepicker',
            templateOptions: {
              label: 'Order Date',
              placeholder: 'Enter Date dd/mm/yyyy Format',
              required: true,
              type: 'date',
              datepickerOptions: { format: 'dd/mm/yyyy', max: maxDate }
            },
          },
          {
            key: 'method',
            type: 'input',
            templateOptions: {
              required: true,
              appearance: 'legacy',
              value: '1'
            },
            hideExpression: '!model.method'
          }
        ]
    }
  ];
}
