import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {MatConfirmDialogData} from '@gomcodoctor/gomco-common/mat-confirm-dialog/mat-confirm-dialog.component';
import {ConfirmationDialogService} from '@gomcodoctor/services/confirmation-dialog/confirmation-dialog.service';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';
import {NavigationService} from '@gomcodoctor/services/navigationservice/navigation.service';
import {SnackBarCustomService} from '@gomcodoctor/_helper/snackBar.custom.service';
import {MatDialogConfig} from '@angular/material/dialog/dialog-config';

@Component({
  selector: 'gomco-base-button',
  template: '<div></div>',
})
export class BaseButtonComponent implements OnInit {

  @Input() matConfirmDialogData: MatConfirmDialogData;
  @Input() matDialogConfig: MatDialogConfig;

  @Input() label;
  @Input() matMenu: boolean;

  @Input() id;

  @Input() row;

  @Input() resource;

  @Input() resourcePath;

  @Input() name;

  @Input() buttonBg;
  // To be removed
  @Input() iconReq;
  @Input() rightIcon = false;

  @Input() method = 'update';
  @Input() redirect;
  @Input() redirectToPreviousPage;


  @Input() showConfirmDialog = false;

  loading = false;


  @Output() updated: EventEmitter<any> = new EventEmitter();
  @Output() dialogClosed: EventEmitter<any> = new EventEmitter();

  constructor(protected baseService: BaseService, protected confirmationDialogService: ConfirmationDialogService, private navigationService: NavigationService, protected snackBarCustomService: SnackBarCustomService) {
  }

  ngOnInit(): void {
  }

  updateWithConfirm(data, title = '') {
    this.matConfirmDialogData.title = title;
    this.confirmationDialogService.openConfirmDialog(null, this.matConfirmDialogData, this.matDialogConfig).subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.update(data);
      }
    });
  }

  update(data) {
    const param = {id: this.row['@id']};
    this.loading = true;

    this.baseService[this.method](data, this.resource, param).subscribe(
      {
        next: response => {
          // this.row = value;
          this.updated.emit(response);
          this.loading = false;
          this.navigate(response);
        },
        error: err => {
          this.loading = false;
        }
      }
    );
  }

  protected navigate(response = {}){
    if (this.redirect) {
      // {queryParams: {registered: true}
      this.navigationService.navigateByRouteName(this.redirect, response );
    }

    if (this.redirectToPreviousPage){
      this.navigationService.back(this.redirectToPreviousPage);
    }
  }

}
