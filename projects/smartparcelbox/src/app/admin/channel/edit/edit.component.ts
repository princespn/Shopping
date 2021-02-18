import { Component, OnInit } from '@angular/core';
import {Fields} from './fields';
import {BaseComponent} from '@app/BaseComponent';

@Component({
  selector: 'homescapes-channel-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends BaseComponent implements OnInit {

  fields = Fields();
  fetchData = false;

}
