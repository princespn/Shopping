import { Component } from '@angular/core';
import { fadeInUp400ms } from '@vexs/animations/fade-in-up.animation';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {TrackingDetailComponent} from "@app/admin/orders/tracking-detail/tracking-detail.component";
import {MatDialog} from "@angular/material/dialog";
import {ResendEmailComponent} from "@app/guest/auth/resend-email/resend-email.component";
import {NavigationService} from "@gomcodoctor/services/navigationservice/navigation.service";

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent {
  resource =  'forgotpassword';
  emailId: string;
  constructor(public dialog: MatDialog, private navigation: NavigationService) {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'usernameOrEmail',
      type: 'input',
      templateOptions: {
        label: 'Email or username',
        required: true,
        appearance: 'outline'
      }
    }
  ];

  success = false;
  successCallback = (response) => {
    console.log('response');
    this.success = true;
  }
  itemModelModifierBeforeCall = (model) => {
    const finalModel = {...model};
    this.emailId = finalModel.usernameOrEmail;
    return finalModel;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResendEmailComponent, {
      data: {emailId: this.emailId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result === 'resetEmail') {
        this.success = false;
      }else{
      this.navigation.back();
      }
    });
  }
}
