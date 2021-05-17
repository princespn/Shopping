import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-channel-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  fields = Fields();
  fetchData = false;

}
