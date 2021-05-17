import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-channel-settings-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {

  resourcePath = 'channel-settings';
  resource = 'channelsettings';

  fields = Fields();
  fetchData = false;

}
