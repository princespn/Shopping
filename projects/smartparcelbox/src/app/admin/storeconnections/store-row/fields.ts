import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
        fieldGroup: [
          // {
          //   key: 'connect',
          //   type: 'input',
          //   templateOptions: {
          //     label: 'Order no',
          //     placeholder: 'Order no',
          //     required: true,
          //     appearance: 'legacy',
          //     type: 'boolean'
          //   },
          //   hideExpression: '!model.connect',
          // },
          {
            key: 'username',
            type: 'input',
            templateOptions: {
              label: 'Enter email',
              placeholder: 'Enter email',
              required: true,
              appearance: 'legacy',
            },
          }
        ]
    }
  ];
}
