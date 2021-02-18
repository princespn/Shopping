import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'users';
  resource = 'users';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'username',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'username',
            required: false,
          },
        }
      ]
    }
  ];

  columns = [
    {
      key: 'username',
      label: 'username',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
