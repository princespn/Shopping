import {Component, Input, OnInit} from '@angular/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {ConfirmationDialogService} from '@gomcodoctor/services/confirmation-dialog/confirmation-dialog.service';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';

import icKeyboardArrowRight from '@iconify/icons-ic/twotone-keyboard-arrow-right';

@Component({
  selector: 'gomco-dialog-button',
  templateUrl: './dialog-form-button.component.html',
  styleUrls: ['./dialog-form-button.component.scss']
})
export class DialogFormButtonComponent extends BaseButtonComponent implements OnInit{

  @Input() buttonDisable;
  @Input() textColor = 'default';
  @Input() isButton = true;
  @Input() icon;
  @Input() successMessage = 'Done';
  @Input() buttonClass = 'font-medium';
  icKeyboardArrowRight = icKeyboardArrowRight;


  openForm() {
    this.confirmationDialogService.openConfirmDialog(null, this.matConfirmDialogData, this.matDialogConfig).subscribe((value) => {
      this.dialogClosed.emit(value);
    });
  }

}
