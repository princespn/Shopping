import {Component, OnInit} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  constructor(protected _route: ActivatedRoute) {}
  resourcePath = 'supplier_orders_items';
  resource = 'supplier_order_items';
  itemResourcePath = 'supplier_order_item_receipts';
  itemResource = 'supplier_order_item_receipts';
  fetchData = false;
  param: any = {};
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'barcode',
          type: 'input',
          templateOptions: {
            placeholder: 'Barcode',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'sku',
          type: 'input',
          templateOptions: {
            placeholder: 'SKU',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'name',
          type: 'input',
          templateOptions: {
            placeholder: 'Name',
            required: false,
          },
        },
      ]
    }
  ];

  columns = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'sku',
      label: 'SKU',
    },
    {
      key: 'barcode',
      label: 'Barcode',
    },
    {
      key: 'quantityOrdered',
      label: 'Quantity Ordered',
    },
    {
      key: 'quantityDelivered',
      label: 'Quantity Delivered'
    }
  ];

  itemColumns = [
    {
      key: 'container.number',
      label: 'Container Number',
    },
    {
      key: 'quantityPerBox',
      label: 'Quantity Per Box',
    },
    {
      key: 'numberOfBox',
      label: 'Number of Box',
    },
    {
      key: 'quantity',
      label: 'Total Quantity',
    },
    {
      key: 'syncToErp',
      label: 'Sync To Erp',
      type: 'boolean'
    },
    {
      key: 'unitCost',
      label: 'Unit Cost',
      type: 'currency'
    },
    {
      key: 'createdAt',
      label: 'Scan Time',
      type: 'datetime'
    }
  ];
  ngOnInit(): void {
    this._route.params.subscribe((queryParams) => {
      this.param = queryParams;
      this.model.order = this.param.id;
    });
  }

}
