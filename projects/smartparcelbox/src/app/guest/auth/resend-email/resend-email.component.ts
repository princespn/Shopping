import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BaseService} from '@gomcodoctor/services/base.service';
import {SnackBarCustomService} from '@gomcodoctor/_helper/snackBar.custom.service';

@Component({
  selector: 'gomco-resend-email',
  templateUrl: './resend-email.component.html',
  styleUrls: ['./resend-email.component.scss']
})
export class ResendEmailComponent  {
     request: EmailRequest;
     emailid;
  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<ResendEmailComponent>, @Inject(MAT_DIALOG_DATA) public data: { emailId: any}, protected apiService: BaseService, protected snackBarCustomService: SnackBarCustomService) {
    this.emailid = data.emailId;
  }

  resetEmail(){
    this.dialogRef.close('resetEmail');
  }

  resendLink(){
    this.request = {
      usernameOrEmail: this.emailid
    };

    this.apiService.post( this.request, 'forgotpassword').subscribe((response: any) => {
        this.snackBarCustomService.openSnackBar('Reset link sent to email');
        this.dialogRef.close();
      },
      (error) => {
        this.dialogRef.close();
      });
  }


}
export interface EmailRequest{
  usernameOrEmail: string;
}
