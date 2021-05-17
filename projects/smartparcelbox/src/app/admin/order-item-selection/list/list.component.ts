import { Component } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import icEdit from '@iconify/icons-ic/twotone-edit';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {

  resourcePath = 'orders';
  resource = 'orders';
  icEdit = icEdit;


}
