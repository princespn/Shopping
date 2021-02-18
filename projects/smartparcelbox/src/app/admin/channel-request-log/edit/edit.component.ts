import { Component, OnInit } from '@angular/core';
import {Fields} from './fields';
import {BaseComponent} from '@app/BaseComponent';

@Component({
  selector: 'homescapes-channel-request-logs-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends BaseComponent implements OnInit {

  resourcePath = 'channel-request-logs';
  resource = 'channelrequestlogs';

  fields = Fields();
  fetchData = false;

}
