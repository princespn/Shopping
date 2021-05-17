import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      fieldGroup: [
        {
          key: 'externalInvoiceNumber',
          type: 'input',
          templateOptions: {
            label: 'External Invoice Number',
            placeholder: 'External Invoice Number',
            required: true,
            appearance: 'legacy'
          },
        },  {
          key: 'supplierReferenceNumber',
          type: 'input',
          templateOptions: {
            label: 'Supplier Refrence Number',
            placeholder: 'Supplier Refrence Number',
            required: true,
            appearance: 'legacy'
          },
        },
        {
          key: 'purchaseDate',
          type: 'datepicker',
          templateOptions: {
            label: 'Purchase Date',
            placeholder: 'Purchase Date',
            required: true,
            appearance: 'legacy',
            optionsResource: 'channels',
            bindLabel: 'name',
            bindValue: '@id',
            searchVariable: 'notimplemeted',
            defaultFilter: {enabled: true},
            getIntialList: true
          },
        }
      ]
    }
  ];
}
