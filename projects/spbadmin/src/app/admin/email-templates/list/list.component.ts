import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/email-templates/list/fields';

@Component({
  selector: 'gomco-email_templates-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  resourcePath = 'email_templates';
  resource = 'email_templates';
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
      label: 'code',
    },
    {
      key: 'subject',
      label: 'subject',
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
