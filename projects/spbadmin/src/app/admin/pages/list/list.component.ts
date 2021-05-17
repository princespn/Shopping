import {Component, OnInit} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/pages/list/fields';

@Component({
  selector: 'admin-pages-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  resourcePath = 'pages';
  resource = 'pages';
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
    },{
      key: 'slug',
      label: 'Slug',
    },{
      key: 'title',
      label: 'Title',
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
