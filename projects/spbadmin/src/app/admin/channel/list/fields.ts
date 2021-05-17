import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'logo',
          type: 'file',
          templateOptions: {
            label: 'Pic',
            placeholder: 'Pic',
            preview: true,
            enableAutoUpload: false,
            multiple: false,
            required: false,
            appearance: 'outline'
          },
        },
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            bindValue: '@name',
            label: 'Channel Name',
            placeholder: 'Channel Name',
            required: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'supportEmail',
          type: 'input',
          templateOptions: {
            label: 'Support Email',
            placeholder: 'Support Email',
            required: false,
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
        },
        {
          key: 'hostname',
          type: 'input',
          templateOptions: {
            label: 'Channel Domain',
            placeholder: 'Channel Domain',
            required: false,
            appearance: 'legacy'
          },
        },
        {
          key: 'description',
          type: 'quill',
          templateOptions: {
            label: 'Channel description',
            placeholder: 'Channel description',
            required: false,
            appearance: 'legacy',
            rows: 5
          },
        },
      ]
    }
  ];
}
