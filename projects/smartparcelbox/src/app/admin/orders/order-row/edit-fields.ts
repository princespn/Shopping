import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(comp): FormlyFieldConfig[] {
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
            currentOptions: comp.channelSubject$,
            placeholder: 'Select Retailer',
            required: true,
            appearance: 'legacy',
            optionsResource: 'channels',
            bindLabel: 'name',
            bindValue: '@id',
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
                      disabled: true,
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
                      disabled: true,
                      currentOptions: comp.courierSubject$,
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
            placeholder: 'Order Date',
            required: true,
            appearance: 'legacy',
          },
        }
      ]
    }
  ];
}
