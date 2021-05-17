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
        ]
      },
        {
          templateOptions: {label: 'Other'},
          fieldGroup: [
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
              key: 'defaultQuantity',
              type: 'input',
              templateOptions: {
                label: 'defaultQuantity',
                placeholder: 'defaultQuantity',
                required: false,
              },
            },
            {
              key: 'channelFeePercent',
              type: 'input',
              templateOptions: {
                label: 'channelFeePercent',
                placeholder: 'channelFeePercent',
                required: false,
              },
            },
            {
              key: 'chhanelFeeFixed',
              type: 'input',
              templateOptions: {
                label: 'chhanelFeeFixed',
                placeholder: 'chhanelFeeFixed',
                required: false,
              },
            },
            {
              key: 'profitPercent',
              type: 'input',
              templateOptions: {
                label: 'profitPercent',
                placeholder: 'profitPercent',
                required: false,
              },
            },
            {
              key: 'profitFixed',
              type: 'input',
              templateOptions: {
                label: 'profitFixed',
                placeholder: 'profitFixed',
                required: false,
              },
            },
            {
              key: 'minimumPricePercent',
              type: 'input',
              templateOptions: {
                label: 'minimumPricePercent',
                placeholder: 'minimumPricePercent',
                required: false,
              },
            },
            {
              key: 'maximumPricePercent',
              type: 'input',
              templateOptions: {
                label: 'maximumPricePercent',
                placeholder: 'maximumPricePercent',
                required: false,
              },
            },
            {
              key: 'minimumPriceFixed',
              type: 'input',
              templateOptions: {
                label: 'minimumPriceFixed',
                placeholder: 'minimumPriceFixed',
                required: false,
              },
            },
            {
              key: 'maximumPriceFixed',
              type: 'input',
              templateOptions: {
                label: 'maximumPriceFixed',
                placeholder: 'maximumPriceFixed',
                required: false,
              },
            },
            {
              key: 'priceRoundUpto',
              type: 'input',
              templateOptions: {
                label: 'priceRoundUpto',
                placeholder: 'priceRoundUpto',
                required: false,
              },
            },
            {
              key: 'defaultCondition',
              type: 'input',
              templateOptions: {
                label: 'defaultCondition',
                placeholder: 'defaultCondition',
                required: false,
              },
            },
          ]
        }
      ],
    }
  ];
}
