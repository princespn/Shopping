import {FormlyFieldConfig} from '@ngx-formly/core';



export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'message',
          type: 'input',
          templateOptions: {
            label: 'Your massages type here',
            placeholder: 'Your massages type here',
            required: true,
          },
        },
        {
          key: 'filename',
          type: 'file',
          templateOptions: {
            resource: 'ticket_messages',
            label: 'att',
            placeholder: 'att',
            enableAutoUpload: false,
            multiple: false,
            required: false,

          },
        },
      ]
    }
  ];


}
