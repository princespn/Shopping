import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-supplier-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  resourcePath = 'suppliers';
  resource = 'suppliers';

  fields = Fields();
  fetchData = false;

}
