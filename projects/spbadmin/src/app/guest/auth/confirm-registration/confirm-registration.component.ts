import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BaseService} from '@gomcodoctor/services/base.service';
import {fadeInUp400ms} from '@vexs/animations/fade-in-up.animation';
import {AuthService} from '@gomcodoctor/services/auth/auth.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'gomco-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss'],
  animations: [
    fadeInUp400ms
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }],
  encapsulation: ViewEncapsulation.None,
})

export class ConfirmRegistrationComponent implements OnInit {
  private queryParams: Params;

  confirmed = false;

  resource = 'pharmacies';

  formGroup = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        // label: 'query',
        label: 'Pharmacy Name',
        placeholder: 'Pharmacy Name',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'address',
      type: 'textarea',
      templateOptions: {
        // label: 'query',
        label: 'Address',
        placeholder: 'Address',
        required: true,
        appearance: 'outline',
        autosize: true,
        autosizeMinRows: 3,
        autosizeMaxRows: 10,
      },
    },
    {
      key: 'owner',
      type: 'checkbox',
      className: 'checkbox',
      templateOptions: {
        // label: 'query',
        label: 'Do you own this store? if yes then you can manage products listed under store',
        placeholder: 'Do you own this store? if yes then you can manage products listed under store',
        required: false,
        appearance: 'standard'
      },
    },
    {
      fieldGroup: [
        {
          fieldGroupClassName: 'display-flex',
          fieldGroup: [
            {
              className: 'flex-1',
              key: 'firstName',
              type: 'input',
              templateOptions: {
                // label: 'query',
                label: 'Contact person first name',
                placeholder: 'Contact person first name',
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
                label: 'Contact person last name',
                placeholder: 'Contact person last name',
                required: true,
                appearance: 'outline'
              },
            }
          ],
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            // label: 'query',
            label: 'Contact Email',
            placeholder: 'Contact Email',
            required: false,
            appearance: 'outline'
          },
        },
        {
          key: 'description',
          type: 'textarea',
          templateOptions: {
            // label: 'query',
            label: 'Description About store',
            placeholder: 'e.g. we are doing business since 10 year, give minimum 10% discount all products with no question return policy',
            required: false,
            appearance: 'outline',
            autosize: true,
            autosizeMinRows: 3,
            autosizeMaxRows: 10,
          },
        },
        {
          key: 'discount',
          type: 'input',
          templateOptions: {
            // label: 'query',
            type: 'number',
            label: 'Min discount on all products of store',
            placeholder: 'Min discount on all products of store',
            required: false,
            appearance: 'outline'
          },
        },
      ],
      hideExpression: (model: any, formState: any, field: FormlyFieldConfig) => {
        return !model.owner;
      }
    }
  ];

  locationFields: FormlyFieldConfig[] = [{
    key: 'locationArray',
    type: 'google-map-location',
    templateOptions: {
      // label: 'query',
      label: 'Location',
      placeholder: 'Location',
      required: true,
      appearance: 'outline'
    },
  }];

  picFields: FormlyFieldConfig[] = [{
    templateOptions: {label: 'Images'},
    fieldGroup: [
      {
        key: 'images',
        type: 'file',
        templateOptions: {
          // label: 'query',
          resource: 'pharmacyimages',
          label: 'Images',
          placeholder: 'Images',
          multiple: true,
          required: true,
          appearance: 'outline'
        },
      },
    ]
  }];

  pharmacy: any = {};

  isLinear = false;

  pharmacyRegistered = (model) => {
    this.pharmacy = model;
  }


  // tslint:disable-next-line:max-line-length
  constructor(protected _route: ActivatedRoute, private baseService: BaseService, private router: Router, protected readonly auth: AuthService) {

  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
      if (this.queryParams && this.queryParams.token){
        this.baseService.post(this.queryParams, 'emailconfirm').subscribe((response) => {
          this.confirmed = true;
          // this.auth.redirectUrl = 'account/edit';
          this.auth.authenticate(response);
          // this.router.navigate(['/login'], {queryParams: {registered: true}});
        });
      }
    });
  }

}
