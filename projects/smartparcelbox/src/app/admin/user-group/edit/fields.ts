import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(realRoles): FormlyFieldConfig[] {
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
          },
          {
            key: 'roles',
            type: 'multicheckbox',
            templateOptions: {
              label: 'Roles',
              placeholder: 'Roles',
              required: true,
              type : 'array',
              options : realRoles,
            },
          }
        ]
      },
      ],
    }
  ];
}
