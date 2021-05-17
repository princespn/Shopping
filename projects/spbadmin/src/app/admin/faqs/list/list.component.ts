import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/faqs/list/fields';

@Component({
  selector: 'gomco-faqs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  resourcePath = 'faqs';
  resource = 'faqs';
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
      key: 'code',
      label: 'Code',
    },
    {
      key: 'question',
      label: 'Question',
    },
    {
      key: 'category',
      label: 'Category',
    }
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
