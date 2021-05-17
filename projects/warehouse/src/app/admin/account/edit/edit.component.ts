import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-account-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  fields: FormlyFieldConfig[] = [
    {
      key: 'profilePic',
      type: 'file',
      templateOptions: {
        // label: 'query',
        resource: 'articleimages',
        label: 'Pic',
        placeholder: 'Pic',
        preview: true,
        enableAutoUpload: false,
        multiple: false,
        required: false,
        appearance: 'outline'
      },
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'firstName',
          type: 'input',
          templateOptions: {
            // label: 'query',
            label: 'First Name',
            placeholder: 'First Name',
            required: true,
            appearance: 'outline'
          },
        },
        {
          className: 'flex-1',
          key: 'lastName',
          type: 'input',
          templateOptions: {
            // label: 'query',
            label: 'Last Name',
            placeholder: 'Last Name',
            required: true,
            appearance: 'outline'
          },
        }
      ],
    },
    {
      key: 'qualification',
      type: 'input',
      templateOptions: {
        // label: 'query',
        label: 'Qualification',
        placeholder: 'Qualification',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'headline',
      type: 'input',
      templateOptions: {
        // label: 'query',
        label: 'Headline',
        placeholder: 'Headline',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'summary',
      type: 'textarea',
      templateOptions: {
        // label: 'query',
        label: 'summary',
        placeholder: 'summary',
        required: true,
        appearance: 'outline',
        autosize: true,
        autosizeMinRows: 3,
        autosizeMaxRows: 10,
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
