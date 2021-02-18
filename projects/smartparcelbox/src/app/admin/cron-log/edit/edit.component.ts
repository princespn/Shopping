import { Component, OnInit } from '@angular/core';
import {Fields} from './fields';
import {BaseComponent} from '@app/BaseComponent';

@Component({
  selector: 'homescapes-cron-log-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends BaseComponent implements OnInit {

  resourcePath = 'cron-logs';
  resource = 'cronlogs';

  fields = Fields();
  fetchData = false;

}
