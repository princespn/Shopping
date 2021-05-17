import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'homescapes-orders-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'orders';
  resource = 'orders';
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
      key: 'channelOrderId',
      label: 'Channel Order Id',
    },
    {
      key: 'currencyCode',
      label: 'Currency',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
