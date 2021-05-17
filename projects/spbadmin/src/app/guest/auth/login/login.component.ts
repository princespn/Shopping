import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { fadeInUp400ms } from '@vexs/animations/fade-in-up.animation';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {AuthService} from '@gomcodoctor/services/auth';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Email or username',
        placeholder: 'Enter email or username',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'password',
      type: 'visiblePassword',
      templateOptions: {
        label: 'Password',
        placeholder: 'Enter Password',
        required: true,
        appearance: 'outline'
      },
    }
  ];
  queryParams;


  constructor(protected _route: ActivatedRoute, protected readonly auth: AuthService) {
    this._route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
    });
  }

  ngOnInit() {}

  successCallback = (response) => {
    this.auth.authenticate(response);
  }
}
