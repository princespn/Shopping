import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatConfirmDialogComponent, MatConfirmDialogData} from '@gomcodoctor/gomco-common/mat-confirm-dialog/mat-confirm-dialog.component';
import {MatDialogConfig} from '@angular/material/dialog/dialog-config';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message = null, matConfirmDialogData = {}, matDialogConfig: MatDialogConfig = {}) {
    return this.openConfirmDialogRef(message, matConfirmDialogData, matDialogConfig).afterClosed();
  }

  openConfirmDialogRef(message = null, matConfirmDialogData: any = {}, matDialogConfig: MatDialogConfig = {}) {
    // const matConfirmDialogData: MatConfirmDialogData = {
    //   confirmMessage: message ?? 'Are you sure you want to execute the following action ?',
    //   dialogueContent
    // };
    if (!matConfirmDialogData.confirmMessage) { matConfirmDialogData.confirmMessage = message ?? 'Are you sure you want to execute the following action ?'; }

    return this.dialog
      .open(MatConfirmDialogComponent, {data: matConfirmDialogData, ...matDialogConfig});
  }
}
