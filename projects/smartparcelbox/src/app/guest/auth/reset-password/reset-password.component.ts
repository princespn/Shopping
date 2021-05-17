import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {ActivatedRoute} from '@angular/router';
import {fadeInUp400ms} from '@vexs/animations/fade-in-up.animation';

@Component({
  selector: 'gomco-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ResetPasswordComponent implements OnInit {

  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'plainPassword',
      type: 'visiblePassword',
      className: 'password',
      templateOptions: {
        label: 'New Password',
        required: true,
        placeholder: 'Enter New Password',
        appearance: 'outline'
      },
    },
    {
      key: 'password',
      type: 'visiblePassword',
      className: 'password',
      templateOptions: {
        label: 'Confirm password',
        required: true,
        placeholder: 'Confirm Password',
        appearance: 'outline'
      }
    }
  ];
  queryParams;

  constructor(protected _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((queryParams: any) => {
      this.queryParams = queryParams;
      this.model.token = queryParams.token;
    });
  }

}
