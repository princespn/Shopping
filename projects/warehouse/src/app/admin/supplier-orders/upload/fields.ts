import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      key: 'feedFile',
      type: 'file',
      templateOptions: {
        // label: 'query',
        resource: '',
        label: 'Pic',
        placeholder: '',
        preview: false,
        enableAutoUpload: false,
        multiple: false,
        required: true,
      },
    }
  ];
}
