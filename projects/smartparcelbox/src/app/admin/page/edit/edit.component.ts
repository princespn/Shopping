import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '@app/BaseComponent';
import {Fields} from '@app/admin/page/edit/fields';

@Component({
  selector: 'gomco-page-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent extends BaseComponent implements OnInit {

  fetchData = false;
  fields = Fields;
}
