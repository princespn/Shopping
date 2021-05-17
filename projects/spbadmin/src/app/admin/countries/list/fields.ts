import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'flag',
          type: 'file',
          templateOptions: {
            resource: 'articleimages',
            label: 'Pic',
            placeholder: 'Pic',
            preview: true,
            enableAutoUpload: false,
            multiple: false,
            required: false,
            appearance: 'outline',
            accept: '.jpg, .png, .jpeg',
            fileExtensions: ['jpg', 'jpeg', 'png']
          },
        },
        {
          key: 'code',
          type: 'input',
          templateOptions: {
            bindValue: '@code',
            label: 'Countries code',
            placeholder: 'Countries code',
            required: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            bindValue: '@name',
            label: 'Countries name',
            placeholder: 'Countries name',
            required: true,
            appearance: 'legacy'
          },
        }
      ]
    }
  ];
}
