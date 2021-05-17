import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'homescapes-channel-request-log-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'channel-request-logs';
  resource = 'channelrequestlogs';

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
      key: 'channelRequestId',
      label: 'channelRequestId',
      sticky: true
    },
    {
      key: 'requestType',
      label: 'requestType',
    },
    {
      key: 'requestStatus',
      label: 'requestStatus',
    },
    {
      key: 'channelProcessingStartDateTime',
      label: 'channelProcessingStartDateTime',
    },
    {
      key: 'channelProcessingCompleteDateTime',
      label: 'channelProcessingCompleteDateTime',
    },
    {
      key: 'recordProcessed',
      label: 'recordProcessed',
    },
    {
      key: 'recordSuccesful',
      label: 'recordSuccesful',
    },
    {
      key: 'recordFailed',
      label: 'recordFailed',
    },
    {
      key: 'recordWithWarning',
      label: 'recordWithWarning',
    },
    {
      key: 'channel.name',
      label: 'channel',
    },
    {
      key: 'createdAt',
      label: 'createdAt',
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
