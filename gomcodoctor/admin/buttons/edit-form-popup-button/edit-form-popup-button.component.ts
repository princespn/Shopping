import {Component, Input, OnInit} from '@angular/core';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-edit-form-popup-button',
  templateUrl: './edit-form-popup-button.component.html',
  styleUrls: ['./edit-form-popup-button.component.scss']
})
export class EditFormPopupButtonComponent extends BaseButtonComponent implements OnInit{
  @Input() template;
  @Input() title;
  ngOnInit() {
    super.ngOnInit();
    this.label = 'Edit';
  }
}
