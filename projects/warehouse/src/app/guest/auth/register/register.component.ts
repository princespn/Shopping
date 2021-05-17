import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { fadeInUp400ms } from '@vexs/animations/fade-in-up.animation';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {SignupModelForm} from '@app/guest/auth/register/signup.model';

@Component({
  selector: 'vex-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    fadeInUp400ms
  ]
})
export class RegisterComponent implements OnInit {

  signupResource = 'register';

  fields: FormlyFieldConfig[] = SignupModelForm;

  success = false;

  successCallBack = (response) => {
    this.success = true;
  }

  ngOnInit() {
  }
}
