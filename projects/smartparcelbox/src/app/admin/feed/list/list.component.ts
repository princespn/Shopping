import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'homescapes-feed-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'feeds';
  resource = 'feeds';

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
      key: 'fileName',
      label: 'fileName',
      type: 'href',
      options: {
        hrefKey: 'downloadUrl'
      }
    },
    {
      key: 'feedType',
      label: 'type',
    },
    {
      key: 'fileSize',
      label: 'size',
    },
    {
      key: 'totalRecords',
      label: 'total',
    },
    {
      key: 'totalSuccess',
      label: 'success',
    },
    {
      key: 'totalFail',
      label: 'fail',
    },
    {
      key: 'totalWarning',
      label: 'warning',
    },
    {
      key: 'processingStatus',
      label: 'status',
    },
    {
      key: 'uploadedAt',
      label: 'uploadedOn',
      type: 'datetime',
    },
    {
      key: 'updatedAt',
      label: 'updatedAt',
      type: 'datetime',
      options: {
        format: 'medium'
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
