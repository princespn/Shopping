import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      type: 'tabs',
      fieldGroup: [{
        templateOptions: {label: 'Basic'},
        fieldGroup: [
          {
            key: 'feedFile',
            type: 'file',
            templateOptions: {
              label: 'file',
              placeholder: 'file',
              required: true,
              multiple: false,
              enableAutoUpload: false,
            },
          },
          {
            key: 'feedType',
            type: 'select',
            templateOptions: {
              label: 'feedType',
              placeholder: 'feedType',
              options: [{label: 'PRODUCT_ID_ASIN_UPC_LIST', value: 'PRODUCT_ID_ASIN_UPC_LIST'}],
              required: true,
              multiple: false,
            },
          }
        ]
      }
      ],
    }
  ];
}
