import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatConfirmDialogComponent, MatConfirmDialogData} from '@gomcodoctor/gomco-common/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message = null) {
    const matConfirmDialogData: MatConfirmDialogData = {
      confirmMessage: message ?? 'Are you sure you want to execute the following action ?'
    };

    return this.dialog
      .open(MatConfirmDialogComponent, {data: matConfirmDialogData})
      .afterClosed();
  }
}
