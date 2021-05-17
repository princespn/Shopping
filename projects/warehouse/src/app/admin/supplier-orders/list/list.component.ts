import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'supplier_orders';
  resource = 'supplier_orders';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'externalInvoiceNumber',
          type: 'input',
          templateOptions: {
            placeholder: 'InvoiceNumber',
            required: false,
          },
        },  {
          className: 'flex-1',
          key: 'status',
          type: 'select',
          templateOptions: {
            placeholder: 'Status',
            required: false,
            options: [{label: 'OPEN', value: 'OPEN'}, {label: 'DELIVERED', value: 'DELIVERED'}, {label: 'PARTIAL', value: 'PARTIAL'}],
          },
        },
        {
          className: 'flex-1',
          key: 'purchaseDate.after',
          type: 'datepicker',
          templateOptions: {
            label: 'From Date (Purchase)',
            placeholder: 'From Date',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'purchaseDate.before',
          type: 'datepicker',
          templateOptions: {
            label: 'To Date (Purchase)',
            placeholder: 'To date',
            required: false,
          },
        },
      ]
    }
  ];
  itemFields: FormlyFieldConfig[] = [
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
        }, {
          className: 'flex-1',
          key: 'sku',
          type: 'input',
          templateOptions: {
            placeholder: 'SKU',
            required: false,
          },
        }
      ]
    }
  ];

  columns = [
    {
      key: 'externalInvoiceNumber',
      label: 'Purchase Order Number',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'currency',
      label: 'Currency',
    },
    {
      key: 'purchaseDate',
      label: 'Purchase Date',
      type: 'datetime'
    },
    {
      key: 'deliveryDate',
      label: 'Delivery Date',
      type: 'datetime'
    },
    {
      key: 'quotedDeliveryDate',
      label: 'Quoted Delivery Date',
      type: 'datetime'
    }
  ];

  itemResourcePath = 'supplier_orders_items';
  itemResource = 'supplier_order_items';
  fetchData = false;

  // itemFields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'display-flex',
  //     fieldGroup: [
  //       {
  //         className: 'flex-1',
  //         key: 'sku',
  //         type: 'input',
  //         templateOptions: {
  //           // label: 'query',
  //           placeholder: 'SKU',
  //           required: false,
  //         },
  //       },
  //       {
  //         className: 'flex-1',
  //         key: 'name',
  //         type: 'input',
  //         templateOptions: {
  //           // label: 'query',
  //           placeholder: 'Name',
  //           required: false,
  //         },
  //       },
  //     ]
  //   }
  // ];

  itemColumns = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
