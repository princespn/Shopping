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
        {
          key: 'slug',
          type: 'input',
          templateOptions: {
            label: 'Slug',
            placeholder: 'Slug',
            required: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'content',
          type: 'quill',
          templateOptions: {
            label: 'Content',
            placeholder: 'Content',
            required: false,
            appearance: 'legacy'
          },
        },
        {
          key: 'title',
          type: 'input',
          templateOptions: {
            label: 'Title',
            placeholder: 'Title',
            required: false,
            appearance: 'legacy'
          },
        }
      ]
    }
  ];
}
