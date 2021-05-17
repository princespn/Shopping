import { Component } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/layout-templates/list/fields';

@Component({
  selector: 'gomco-layout_templates-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{
  resourcePath = 'email_layout_templates';
  resource = 'email_layout_templates';

  fields = Fields();

  searchFields: FormlyFieldConfig[] = [
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
    }
  ];
  batchActions = {
    delete: {}
  };
}
