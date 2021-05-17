import { Component } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/product/edit/fields';

@Component({
  selector: 'gomco-products-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  resource = 'products';
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'code',
          type: 'input',
          templateOptions: {
            placeholder: 'SKU',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'upc',
          type: 'input',
          templateOptions: {
            placeholder: 'EAN',
            required: false,
          },
        },
      ]
    }
  ];

  columns = [
    {
      key: 'code',
      label: 'SKU',
    },
    {
      key: 'upc',
      label: 'EAN',
    }
  ];

  constructor() { }

  editFields = Fields;

}
