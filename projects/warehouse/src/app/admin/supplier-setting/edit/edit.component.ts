import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-supplier-settings-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent{

  resourcePath = 'supplier-settings';
  resource = 'suppliersettings';

  fields = Fields();
  fetchData = false;

}
