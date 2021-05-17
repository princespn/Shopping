import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      type: 'tabs',
      fieldGroup: [{
        templateOptions: {label: 'Basic'},
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: 'name',
              placeholder: 'name',
              required: true,
            },
          }
        ]
      },
      ],
    }
  ];
}
