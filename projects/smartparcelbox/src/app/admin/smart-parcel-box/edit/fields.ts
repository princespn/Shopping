import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(): FormlyFieldConfig[] {
  return [
/*    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        appearance: 'outline'
      },
    },*/
    {
      key: 'addressLine1',
      type: 'input',
      templateOptions: {
        label: 'Address',
        placeholder: 'Enter your address',
        required: true,
        appearance: 'outline'
      },
    },
/*    {
      key: 'addressLine2',
      type: 'input',
      templateOptions: {
        label: 'Address 2',
        placeholder: 'Enter your another address if any',
        required: true,
        appearance: 'outline'
      },
      // validation: {
      //   messages: {
      //     required: (error, field: FormlyFieldConfig) => `"${field.templateOptions.label}" is required`,
      //   },
      // }
    },*/
    {
      key: 'city',
      type: 'input',
      templateOptions: {
        label: 'Town/City',
        placeholder: 'Town/City',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'state',
      type: 'input',
      templateOptions: {
        label: 'County/State',
        placeholder: 'County',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'postalCode',
      type: 'input',
      templateOptions: {
        type: 'string',
        label: 'Post Code',
        placeholder: 'Post Code',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'country',
      type: 'typehead',
      templateOptions: {
        label: 'Country',
        placeholder: 'Country',
        required: true,
        appearance: 'outline',
        optionsResource: 'countries',
        bindLabel: 'name',
        searchVariable: 'notimplemeted',
        defaultFilter: {active: true},
        bindValue: 'name',
        getIntialList: true
      },
    },
    {
      key: 'phone',
      type: 'input',
      templateOptions: {
        type: 'integer',
        label: 'Phone Number',
        placeholder: 'Phone Number',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: 'boxImage',
      type: 'file',
      templateOptions: {
        // label: 'query',
        resource: '',
        label: 'Pic',
        placeholder: '',
        preview: true,
        enableAutoUpload: false,
        profilePic: false,
        multiple: false,
        required: false,
      },
    },
    {
      key: 'landmark',
      type: 'textarea',
      templateOptions: {
        label: 'Smart Parcel Box Location',
        placeholder: 'location of the Smart parcel Box Where its installed',
        required: true,
        appearance: 'outline',
        rows: 2,
      },
    },
    {
      key: 'barcode',
      type: 'input',
      templateOptions: {
        type: 'integer',
        label: 'Barcode',
        placeholder: 'Barcode Number',
        required: true,
        appearance: 'outline'
      },
    },
    {
      key: '',
      type: 'textarea',
      templateOptions: {
        label: 'Authorization for the Courier Companies',
        placeholder: '',
        required: true,
        rows: 6,
        disabled: true,
        appearance: 'outline',
      },
      defaultValue: 'I hereby authorise courier and mailing services which are contracted to Smart Parcel Box to deliver signed for deliveries to the Smart Parcel Box installed at my address as stated below. I further accept that the scanning of the unique barcode of my Smart Parcel Box will act as my acceptance of taking the delivery (proof of delivery) as long as the following conditions apply The parcel should fit into my Smart Parcel Box. The proof of delivery is taken in terms of either scanning or recording the unique code on my box which is linked to my delivery address. This may be considered as continuing special delivery request and supersedes the necessity to inform the courier companies each time a delivery is made to my address.',
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'I hereby consent to the above information to be shared with couriers for use as proof of delivery confirmation. ' +
          'Only relevant information will be retained and shared. I have read the authorization and confirm the same ',
        placeholder: '',
        required: true,
        appearance: 'default',
        indeterminate: false,
        color: 'primary',
      }
    }
  ];
}
