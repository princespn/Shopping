import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'homescapes-supplier-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'supplier-products';
  resource = 'supplierproducts';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'name',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'name',
            required: false,
          },
        }
      ]
    }
  ];

  columns = [

    {
      key: 'supplier.name',
      label: 'Supplier',
    },
    {
      key: 'product.asin',
      label: 'ASIN',
    },
    {
      key: 'product.upc',
      label: 'UPC',
    },
    {
      key: 'supplierProductId',
      label: 'supplierProductId',
    },
    {
      key: 'stock',
      label: 'stock',
    },
    {
      key: 'enabled',
      label: 'enabled',
      type: 'boolean'
    },
    {
      key: 'price',
      label: 'price',
      type: 'currency',
      options: {
        code: 'USD',
        multiplier: 0.01,
      }
    },
    {
      key: 'finalTotalCost',
      label: 'finalTotalCost',
      type: 'currency',
      options: {
        multiplier: 0.01,
      }
    },
  ];

  actions = [
    {type: 'toggle'},
    {type: 'edit'},
    {type: 'delete'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
