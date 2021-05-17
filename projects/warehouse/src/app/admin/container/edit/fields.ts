import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
          {
            key: 'number',
            type: 'input',
            templateOptions: {
              label: 'Container Number',
              placeholder: 'Container Number',
              required: true,
            },
          },
          {
            key: 'status',
            type: 'select',
            templateOptions: {
              label: 'Status',
              placeholder: 'Status',
              required: true,
              options: [
                { value: 'open', label: 'Open' },
                { value: 'close', label: 'Close' }
              ],
            },
          }
      ],
    }
  ];
}
