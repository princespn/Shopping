import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-cron-log-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  resourcePath = 'cron-logs';
  resource = 'cronlogs';

  fields = Fields();
  fetchData = false;

}
