import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      key: 'fileName',
      type: 'file',
      templateOptions: {
        // label: 'query',
        resource: 'ticket_messages',
        label: 'Pic',
        placeholder: '',
        preview: true,
        enableAutoUpload: false,
        multiple: false,
        required: true,
      },
    }
  ];
}
