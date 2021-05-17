import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '../../channel-product/list/fields';


@Component({
  selector: 'homescapes-channel-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'channel-products';
  resource = 'channelproducts';
  fields = Fields();

  fieldnams: FormlyFieldConfig[] = [
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
      key: 'channel.name',
      label: 'Channel',
    },
    {
      key: 'sku',
      label: 'SKU',
    },
    {
      key: 'channelProductId',
      label: 'channelProductId',
    },
    {
      key: 'stock',
      label: 'stock',
    },
    {
      key: 'price',
      label: 'price',
      type: 'currency',
      options: {
        multiplier: 0.01,
      }
    },
    {
      key: 'deleted',
      label: 'deleted',
      type: 'boolean'
    },
  ];

  actions = {
    edit: {}
  };

  batchActions = {
    delete: {}
  };


  constructor() { }

  ngOnInit(): void {
  }

}
