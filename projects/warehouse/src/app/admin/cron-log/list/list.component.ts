import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'homescapes-cron-log-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'cron-logs';
  resource = 'cronlogs';

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
      key: 'name',
      label: 'Name',
    },
    {
      key: 'description',
      label: 'description',
    },
    {
      key: 'successful',
      label: 'successful',
      type: 'boolean'
    },
    {
      key: 'lastRun',
      label: 'lastRunAt',
      type: 'datetime'
    },
    {
      key: 'recordProcessed',
      label: 'recordProcessed',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
