import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
    {
      type: 'tabs',
      fieldGroup: [{
        templateOptions: {label: 'Basic'},
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: 'name',
              placeholder: 'name',
              required: true,
            },
          },
          {
            key: 'description',
            type: 'input',
            templateOptions: {
              label: 'description',
              placeholder: 'description',
              required: false,
            },
          },
          {
            key: 'skuPrefix',
            type: 'input',
            templateOptions: {
              label: 'skuPrefix',
              placeholder: 'skuPrefix',
              required: false,
            },
          },
          {
            key: 'skuSuffix',
            type: 'input',
            templateOptions: {
              label: 'skuSuffix',
              placeholder: 'skuSuffix',
              required: false,
            },
          },
          {
            key: 'taxPercent',
            type: 'input',
            templateOptions: {
              label: 'taxPercent',
              placeholder: 'taxPercent',
              required: false,
            },
          },
          {
            key: 'customDutyPercent',
            type: 'input',
            templateOptions: {
              label: 'customDutyPercent',
              placeholder: 'customDutyPercent',
              required: false,
            },
          },
          {
            key: 'shippingCostPerLb',
            type: 'input',
            templateOptions: {
              label: 'shippingCostPerLb',
              placeholder: 'shippingCostPerLb',
              required: false,
            },
          },
          {
            key: 'shippingCostFixed',
            type: 'input',
            templateOptions: {
              label: 'shippingCostFixed',
              placeholder: 'shippingCostFixed',
              required: false,
            },
          },
          {
            key: 'lowCostItemShippingCost',
            type: 'input',
            templateOptions: {
              label: 'lowCostItemShippingCost',
              placeholder: 'lowCostItemShippingCost',
              required: false,
            },
          },
          {
            key: 'lowCostItemPrice',
            type: 'input',
            templateOptions: {
              label: 'lowCostItemPrice',
              placeholder: 'lowCostItemPrice',
              required: false,
            },
          },
          {
            key: 'conversionRate',
            type: 'input',
            templateOptions: {
              label: 'conversionRate',
              placeholder: 'conversionRate',
              required: false,
            },
          },
          {
            key: 'handlingTime',
            type: 'input',
            templateOptions: {
              label: 'handlingTime',
              placeholder: 'handlingTime',
              required: false,
            },
          },
          {
            key: 'defaultWeight',
            type: 'input',
            templateOptions: {
              label: 'defaultWeight',
              placeholder: 'defaultWeight',
              required: false,
            },
          },
          {
            key: 'minQuantity',
            type: 'input',
            templateOptions: {
              label: 'minQuantity',
              placeholder: 'minQuantity',
              required: false,
            },
          },
        ]
      },
      ],
    }
  ];
}
