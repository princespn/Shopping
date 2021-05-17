import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'logo',
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
          key: 'name',
          type: 'input',
          templateOptions: {
            bindValue: '@name',
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
            bindValue: '@code',
            label: 'Code',
            placeholder: 'Code',
            required: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'trackUrlFormat',
          type: 'input',
          templateOptions: {
            label: 'Track Url Format',
            placeholder: 'Track Url Format',
            required: false,
            appearance: 'legacy'
          },
        },
       // {
        //  key: 'active',
        //  type: 'checkbox',
        //  templateOptions: {
        //    label: 'Isactive',
       //     placeholder: 'Isactive',
       //     required: true,
       //     appearance: 'legacy'
       //   },
     //   },
        {
          key: 'website',
          type: 'input',
          templateOptions: {
            bindValue: '@website',
            label: 'Website',
            placeholder: 'Website',
            required: false,
            appearance: 'legacy'
          },
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            bindValue: '@email',
            label: 'E-mail Id',
            placeholder: 'E-mail Id',
            required: false,
            appearance: 'legacy'
          },
        },
        {
          key: 'phone',
          type: 'input',
          templateOptions: {
            bindValue: '@phone',
            label: 'Phone Number',
            placeholder: 'Phone Number',
            required: false,
            appearance: 'legacy'
          },
        },
      ]
    }
  ];
}
