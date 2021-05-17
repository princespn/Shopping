import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'gomco-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  resourcePath = 'orders';
  resource = 'orders';

  fields = Fields();
  fetchData = false;

}
