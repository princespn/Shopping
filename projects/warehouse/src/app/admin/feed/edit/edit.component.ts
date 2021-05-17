import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-feeds-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  resourcePath = 'feeds';
  resource = 'feeds';

  fields = Fields();
  fetchData = false;

}
