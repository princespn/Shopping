import {Component} from '@angular/core';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent extends BaseButtonComponent{

  constructor(baseService: BaseService) {
    super(baseService);
    this.label = 'Edit';
  }
}
