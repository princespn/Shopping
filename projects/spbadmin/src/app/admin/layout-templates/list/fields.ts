import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            bindValue: 'name',
            label: 'Name',
            placeholder: 'Name',
            required: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'code',
          type: 'input',
          templateOptions: {
            bindValue: 'code',
            label: 'code',
            placeholder: 'code',
            required: true,
            appearance: 'legacy'
          },
        }, {
          key: 'template',
          type: 'textarea',
          templateOptions: {
            label: 'Template',
            placeholder: 'Template',
            required: true,
            appearance: 'outline',
            autosize: true,
            autosizeMinRows: 5,
            autosizeMaxRows: 20,
          },
        },
      ]
    }
  ];
}
