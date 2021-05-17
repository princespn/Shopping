import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
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
            appearance: 'legacy'
          },
        },
        {
          key: 'code',
          type: 'input',
          templateOptions: {
            bindValue: '@code',
            label: 'code',
            placeholder: 'code',
            required: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'subject',
          type: 'input',
          templateOptions: {
            bindValue: '@subject',
            label: 'Subject',
            placeholder: 'Subject',
            required: false,
            appearance: 'legacy'
          },
        },
        {
          key: 'layout',
          type: 'typehead',
          templateOptions: {
            label: 'Layout',
         //   currentOptions: comp.layoutSubject$,
            placeholder: 'Choose layout',
            required: false,
            optionsResource: 'email_layout_templates',
            bindLabel: 'name',
            searchVariable: 'name',
            appearance: 'legacy',
            bindValue: '@id',
            getIntialList: true,
          }
        },
        {
          key: 'content',
          type: 'textarea',
          templateOptions: {
            label: 'Template',
            placeholder: 'Template',
            required: false,
            appearance: 'outline',
            autosize: true,
            autosizeMinRows: 5,
            autosizeMaxRows: 20,
          },
        },
        {
          key: 'senderName',
          type: 'input',
          templateOptions: {
            bindValue: '@senderName',
            label: 'Sender Name',
            placeholder: 'Sender Name',
            required: false,
            appearance: 'legacy'
          },
        },
        {
          key: 'senderAddress',
          type: 'input',
          templateOptions: {
            bindValue: '@senderAddress',
            label: 'Sender Address',
            placeholder: 'Sender Address',
            required: false,
            appearance: 'legacy'
          },
        },
      ]
    }
  ];
}
