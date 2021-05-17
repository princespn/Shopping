import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Fields} from '@app/admin/smart-parcel-box/edit/fields';


@Component({
  selector: 'gomco-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  resourcePath = 'smart-parcel-box';
  resource = 'myspbox';
  form = new FormGroup({});

  model: any = {};
  fields = Fields();
}
