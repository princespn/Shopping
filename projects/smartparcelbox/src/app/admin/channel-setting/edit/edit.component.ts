import { Component, OnInit } from '@angular/core';
import {Fields} from './fields';
import {BaseComponent} from '@app/BaseComponent';

@Component({
  selector: 'homescapes-channel-settings-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends BaseComponent implements OnInit {

  resourcePath = 'channel-settings';
  resource = 'channelsettings';

  fields = Fields();
  fetchData = false;

}
