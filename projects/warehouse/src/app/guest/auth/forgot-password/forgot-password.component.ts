import { Component } from '@angular/core';
import { fadeInUp400ms } from '@vexs/animations/fade-in-up.animation';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent {

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
    this.success = true;
  }

}
