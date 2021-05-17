import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(items): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [{
        key: 'messages',
        type: 'repeat',
        fieldArray: {
          fieldGroup: [
            {
              key: 'orderItems',
              type: 'repeat',
              fieldArray: {
                fieldGroup: [
                  {
                    key: 'quantity',
                    type: 'input',
                    templateOptions: {
                      required: true,
                      appearance: 'outline',
                      type: 'number',
                      min: 1
                    },
                    expressionProperties: {
                      'templateOptions.max': (model: any, formState: any, field: FormlyFieldConfig) => {
                        const orderItem = items?.find(value => value['@id'] === model.orderItem);
                        return orderItem?.quantity;
                      },
                    },
                  },
                  {
                    key: 'message',
                    type: 'input',
                    wrappers: ['selectItem_return', 'form-field'],
                    templateOptions: {
                      items,
                      required: true,
                      appearance: 'outline',
                      label: 'Reason',
                    }
                  }
                  ],
              }
            },
            {
              key: 'files',
              type: 'file',
              templateOptions: {
                label: 'file',
                placeholder: 'file',
                required: false,
                multiple: true,
                enableAutoUpload: true,
                resource: 'ticketimages',
                accept: '.jpg, .png, .jpeg',
                fileExtensions: ['jpg', 'jpeg', 'png']
              }
            },
          ],
        }
      }
      ]
    }
  ];
}
