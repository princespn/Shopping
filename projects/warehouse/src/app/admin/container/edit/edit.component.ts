import {Component} from '@angular/core';
import {Fields} from '@app/admin/container/edit/fields';

@Component({
  selector: 'gomco-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  fields = Fields();

}
