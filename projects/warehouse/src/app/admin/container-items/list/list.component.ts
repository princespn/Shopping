import { Component } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  resourcePath = 'container-items';
  resource = 'supplier_order_item_receipts';
  param: any = {};
  columns = [
    {
      key: 'barcode',
      label: 'Barcode',
    },
    {
      key: 'quantity',
      label: 'Quantity',
    },
    {
      key: 'numberOfBox',
      label: 'Number Of Box',
    },
    {
      key: 'syncToErp',
      label: 'Sync To Erp',
    }
  ];
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'barcode',
          type: 'input',
          templateOptions: {
            placeholder: 'barcode',
            required: false,
          },
        }
      ]
    }
  ];
}
