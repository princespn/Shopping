import { Component } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-account-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  fields: FormlyFieldConfig[] = [
    {
      key: 'profilePic',
      type: 'file',
      templateOptions: {
        resource: 'articleimages',
        label: 'Pic',
        placeholder: 'Pic',
        preview: true,
        enableAutoUpload: false,
        profilePic: true,
        multiple: false,
        required: false,
        appearance: 'legacy',
        accept: '.jpg, .png, .jpeg',
        fileExtensions: ['jpg', 'jpeg', 'png']
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
            appearance: 'legacy'
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
            appearance: 'legacy'
          },
        }
      ],
    },
    {
      key: 'country',
      type: 'typehead',
      templateOptions: {
        label: 'Country',
        placeholder: 'Country',
        required: true,
        appearance: 'legacy',
        optionsResource: 'countries',
        bindLabel: 'name',
        searchVariable: 'name',
        defaultFilter: {active: true},
        bindValue: 'code',
        getIntialList: true
      },
    },
    {
      key: 'locale',
      type: 'select',
      templateOptions: {
        label: 'Language',
        disabled: true,
        placeholder: 'Language',
        required: true,
        appearance: 'legacy',
        options: [{label: 'English', value: 'en-US'}],
      },
    }
  ];


}
