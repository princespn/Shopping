import {Component, OnInit, ViewChild} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-productstocklog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('datetime') datetime;


  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'productSku',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'SKU',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'username',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'username',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'createdAt.after',
          type: 'datepicker',
          templateOptions: {
            label: 'From Date',
            placeholder: 'From Date',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'createdAt.before',
          type: 'datepicker',
          templateOptions: {
            label: 'To Date',
            placeholder: 'To date',
            required: false,
          },
        },
        {
          className: 'flex-1',
          key: 'locationType',
          type: 'select',
          templateOptions: {
            // label: 'query',
            options: [{label: 'None', value: null}, {label: 'Storage', value: 'storage'}, {label: 'Pick', value: 'pick'}],
            placeholder: 'type',
            required: false,
          },
        }
      ]
    }
  ];

  constructor() { }

  columns = [
    {
      key: 'username',
      label: 'Username',
    },
    {
      key: 'productSku',
      label: 'SKU',
    },
    {
      key: 'oldQuantity',
      label: 'Old Quantity',
    },
    {
      key: 'newQuantity',
      label: 'New Quantity',
    },
    {
      key: 'locationId',
      label: 'Bin Rack',
    },
    {
      key: 'locationType',
      label: 'Type',
    },
    {
      key: 'warehouseCode',
      label: 'Warehouse',
    },
    {
      key: 'productName',
      label: 'Name',
    },
    {
      key: 'createdAt',
      label: 'Time',
      type: 'datetime',
      // template: this.datetime
    }
  ];
  ngOnInit(): void {
  }

}
