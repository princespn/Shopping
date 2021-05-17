import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'username',
          type: 'input',
          templateOptions: {
            label: 'User name',
            placeholder: 'User name',
            required: true,
            disabled: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Email',
            placeholder: 'Email',
            required: true,
            disabled: true,
            appearance: 'legacy'
          },
        },
        /*{
          key: 'currentPassword',
          type: 'visiblePassword',
          templateOptions: {
            label: 'Current Password',
            placeholder: 'Enter Current Password',
            required: true,
            disabled: true,
            appearance: 'legacy'
          },
        },*/
      ]
    }
  ];
}
