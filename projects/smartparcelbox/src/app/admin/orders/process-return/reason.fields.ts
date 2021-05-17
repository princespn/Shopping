import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'reason',
          type: 'typehead',
          templateOptions: {
            label: 'Reason for return',
            placeholder: 'Choose reason',
            required: true,
            optionsResource: 'ticket_request_types',
            defaultFilter: {'parentType.code': 'return-request'},
            bindLabel: 'name',
            searchVariable: 'name',
            appearance: 'legacy',
            bindValue: '@id',
            getIntialList: true
          }
        },
        {
          key: 'requestType',
          type: 'select',
          templateOptions: {
            label: 'Item Condition',
            placeholder: 'Choose condition',
            required: true,
            multiple: false,
            appearance: 'legacy',
            disabled: true,
            options: [],
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.reason',
            'templateOptions.options': (model: any, formState: any, field: FormlyFieldConfig) => {
              // tslint:disable-next-line:prefer-for-of
              const selectedOption = formState?.reason?.find(value => value['@id'] === model.reason);
              const finalOption = [];
              selectedOption?.children?.map(value => finalOption.push({label :  value.name, value: value['@id']}));
              formState.requestType = selectedOption?.children;
              return finalOption;

            },
          },
        },
        {
          key: 'resolutionRequired',
          type: 'select',
          templateOptions: {
            label: 'Resolution Required',
            placeholder: 'Choose resolution',
            required: true,
            multiple: false,
            appearance: 'legacy',
            disabled: true,
            options: [],
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.requestType',
            'templateOptions.options': (model: any, formState: any, field: FormlyFieldConfig) => {
              // tslint:disable-next-line:prefer-for-of
              const selectedOption = formState?.requestType?.find(value => value['@id'] === model.requestType);
              const finalOption = [];
              selectedOption?.resolutionOptions?.map(value => finalOption.push({label :  value, value}));
              return finalOption;

            },
          },
        },

        {
          key: 'message',
          type: 'textarea',
          templateOptions: {
            label: 'Comment',
            placeholder: 'Enter Comment',
            required: true,
            appearance: 'outline',
            autosize: true,
            autosizeMinRows: 3,
            autosizeMaxRows: 10,
          },
        }
        // {
        //   key: 'message',
        //   type: 'textarea',
        //   templateOptions: {
        //     label: 'Comment',
        //     placeholder: 'Enter Comment',
        //     required: true,
        //     autosizeMinRows: 5,
        //     appearance: 'legacy'
        //   },
        // }
      ]
    }
  ];
}
