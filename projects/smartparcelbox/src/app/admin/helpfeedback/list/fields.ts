import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'messages',
          type: 'repeat',
          fieldArray: {
            fieldGroup: [
              {
                key: 'requestType',
                type: 'typehead',
                templateOptions: {
                  label: 'Select Topic',
                  placeholder: 'Select Topic',
                  required: true,
                  appearance: 'legacy',
                  optionsResource: 'ticket_request_types',
                  bindLabel: 'name',
                  bindValue: '@id',
                  searchVariable: 'notimplemeted',
                  defaultFilter: {'parentType.code': 'contact'},
                  getIntialList: true
                },
              },
              {
                key: 'message',
                type: 'textarea',
                templateOptions: {
                  label: 'Comment',
                  placeholder: 'Comment here.',
                  required: true,
                  appearance: 'legacy',
                  rows: 5
                },
              }
            ]
          }
        }
      ]
    }
  ];
}
