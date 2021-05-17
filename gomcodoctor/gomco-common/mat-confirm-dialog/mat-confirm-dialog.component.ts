import {Component, Inject, Input, OnInit, TemplateRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
export interface MatConfirmDialogData {
  title?: string;
  confirmMessage?: string;
  confirmTextButton?: string;
  cancelTextButton?: string;
  dialogueContent?: TemplateRef<any>;
  showActionButtons?: boolean;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
}

@Component({
  selector: 'gomco-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss']
})
export class MatConfirmDialogComponent implements OnInit {
  icClose = icClose;
  @Input() title = 'Confirm';
  confirmMessage: string;
  confirmTextButton: string;
  cancelTextButton: string;
  dialogueContent: any;
  showConfirmButton = true;
  showActionButtons = true;
  showCancelButton = true;

  constructor(public dialogRef: MatDialogRef<MatConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MatConfirmDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Confirm';
      this.confirmMessage = this.data.confirmMessage ? this.data.confirmMessage : 'Are you sure ?';
      this.confirmTextButton = this.data.confirmTextButton ? this.data.confirmTextButton : 'Confirm';
      this.cancelTextButton = this.data.cancelTextButton ? this.data.cancelTextButton : 'Cancel';
      this.dialogueContent = this.data.dialogueContent;
      this.showActionButtons = this.data.showActionButtons ?? true;
    }
  }

}
