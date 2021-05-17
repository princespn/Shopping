import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/supplier-order-item-receipts/list/editFields';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  resourcePath = 'supplier_order_item_receipts';
  resource = 'supplier_order_item_receipts';

  itemResourcePath = 'supplier_orders_items';
  itemResource = 'supplier_order_items';
  orderResource = 'supplier_orders';
  fetchData = false;
  editFields = Fields();

  @ViewChild('select') select: TemplateRef<any>;

  columns = [
    {
      key: 'orderItem.order.externalInvoiceNumber',
      label: 'Purchase Order Number',
    },
    {
      key: 'orderItem.order.supplier.name',
      label: 'Supplier',
    },
    {
      key: 'barcode',
      label: 'Barcode ',
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
      label: 'Quantity',
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
  itemColumns = [
    {
      key: 'order.externalInvoiceNumber',
      label: 'External Invoice Number',
    },
    {
      key: 'order.supplier.name',
      label: 'Supplier',
    },
    {
      key: 'order.purchaseDate',
      label: 'Purchase Date',
      type: 'datetime'
    },
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

  orderColumns = [
    {
      key: 'externalInvoiceNumber',
      label: 'External Invoice Number',
    },
    {
      key: 'supplier.name',
      label: 'Supplier',
    },
    {
      key: 'purchaseDate',
      label: 'Purchase Date',
      type: 'datetime'
    }
  ];

  actions = [];

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
        }
      ]
    }
  ];

  ngAfterViewInit() {
    this.actions.push({
      type: 'template',
      template: this.select
    });
  }
}
