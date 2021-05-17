import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/couriers/list/fields';

@Component({
  selector: 'gomco-couriers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  resourcePath = 'couriers';
  resource = 'couriers';
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
            placeholder: 'name',
            required: false,
          },
        }
      ]
    }
  ];

  columns = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'code',
      label: 'Code',
    },
     {
      key: 'website',
      label: 'Website',
    },

  ];


  constructor() { }

  ngOnInit(): void {
  }


}
