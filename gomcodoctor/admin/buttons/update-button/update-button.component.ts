import {Component, Input, OnInit} from '@angular/core';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';


@Component({
  selector: 'gomco-update-button',
  templateUrl: './update-button.component.html',
  styleUrls: ['./update-button.component.scss']
})
export class UpdateButtonComponent extends BaseButtonComponent implements OnInit{

  @Input() data;


}
