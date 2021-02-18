import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-pages-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'title',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'Title',
            required: false,
          },
        },
      ]
    }
  ];

  columns = [
    {
      key: 'title',
      label: 'Title',
    },
    {
      key: 'createdAt',
      label: 'CreatedAt',
    },
    {
      key: 'edit',
      label: 'Edit',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
