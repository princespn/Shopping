import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'code',
          type: 'input',
          templateOptions: {
            bindValue: '@code',
            label: 'Code',
            placeholder: 'Code',
            required: true,
            appearance: 'legacy'
          },
        },
        { key: 'category',
          type: 'select',
          templateOptions: {
            label: 'Select Category',
            placeholder: 'Select Category',
            required: true,
            appearance: 'legacy',
            options: [
              {label: 'My Orders', value: 'My Orders'},
              {label: 'Tracking my deliveries', value: 'Tracking my deliveries'},
              {label: 'Returns Management', value: 'Returns Management'},
              {label: 'Smart Parcel Box', value: 'Smart Parcel Box'},
              {label: 'Integrated Stores', value: 'Integrated Stores'},
              {label: 'My Privacy & Security', value: 'My Privacy Security'},
            ],
          },
        },
        {
          key: 'question',
          type: 'input',
          templateOptions: {
            label: 'Question',
            placeholder: 'Question',
            required: false,
            appearance: 'legacy'
          },
        },
        {
          key: 'answer',
          type: 'textarea',
          templateOptions: {
            label: 'Answer',
            placeholder: 'Answer',
            required: false,
            appearance: 'outline',
            autosize: true,
            autosizeMinRows: 1,
            autosizeMaxRows: 10,
          },
        }
      ]
    }
  ];
}
