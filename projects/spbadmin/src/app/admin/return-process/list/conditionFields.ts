import {FormlyFieldConfig} from '@ngx-formly/core';

export function ConditionFields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            label: 'Name',
            placeholder: 'Name',
            required: true,
            bindLabel: 'name',
            appearance: 'legacy'
          },
        },
        {
          key: 'code',
          type: 'input',
          templateOptions: {
            label: 'Code',
            placeholder: 'Code',
            required: true,
            bindLabel: 'name',
            appearance: 'legacy'
          },
        },  {
          key: 'resolutionOptions',
          type: 'input',
          templateOptions: {
            label: 'Resolution Options',
            placeholder: 'Add Options with comma separated',
            required: false,
            bindLabel: 'name',
            appearance: 'legacy'
          },
        }
      ]
    }
  ];
}
