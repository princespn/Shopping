import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-channel-request-logs-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent{

  resourcePath = 'channel-request-logs';
  resource = 'channelrequestlogs';

  fields = Fields();
  fetchData = false;

}
