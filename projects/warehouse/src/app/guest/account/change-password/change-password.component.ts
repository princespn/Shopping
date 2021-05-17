import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordFields: FormlyFieldConfig[] = [
    {
      key: 'currentPassword',
      type: 'visiblePassword',
      templateOptions: {
        label: 'Current Password',
        placeholder: 'Enter Current Password',
        required: true,
        appearance: 'outline'
      },
    },
    {
      validators: {
        validation: [
          { name: 'fieldMatch', options: { errorPath: 'password' } },
        ],
      },
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'plainPassword',
          type: 'visiblePassword',
          templateOptions: {
            // label: 'query',
            label: 'New Password',
            placeholder: 'New Password',
            required: true,
            appearance: 'outline'
          },
        },
        {
          className: 'flex-1',
          key: 'password',
          type: 'visiblePassword',
          templateOptions: {
            // label: 'query',
            label: 'Repeat Password',
            placeholder: 'Repeat Password',
            required: true,
            appearance: 'outline'
          },
        }
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
