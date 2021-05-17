import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
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
          key: 'currencyCode',
          type: 'input',
          templateOptions: {
            label: 'Currency Code',
            placeholder: 'Currency Code',
            required: true,
            appearance: 'legacy'
          },
        }
      ]
    }
  ];
}
