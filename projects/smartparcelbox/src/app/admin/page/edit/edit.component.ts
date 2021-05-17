import {Component} from '@angular/core';
import {Fields} from '@app/admin/page/edit/fields';

@Component({
  selector: 'gomco-page-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent  {

  fetchData = false;
  fields = Fields;
}
