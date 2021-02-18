export const SignupModelForm = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      label: 'username',
      required: true,
      appearance: 'outline',
    },
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email',
      required: true,
      type: 'email',
      appearance: 'outline',
    },
  },
  {
    validators: {
      validation: [
        { name: 'fieldMatch', options: { errorPath: 'password' } },
      ],
    },
    fieldGroup: [
      {
        key: 'plainPassword',
        type: 'visiblePassword',
        className: 'password',
        templateOptions: {
          label: 'password',
          required: true,
          placeholder: 'Enter email',
          appearance: 'outline',
          // type: 'password',
        },
      },
      {
        key: 'password',
        type: 'visiblePassword',
        className: 'password',
        templateOptions: {
          label: 'Confirm password',
          required: true,
          placeholder: 'Enter email',
          appearance: 'outline',
          // type: 'password',
        },
      },
    ],
  },
  {
    key: 'privacy',
    type: 'checkbox',
    className: 'checkbox',
    templateOptions: {
      label: 'Accept terms In order to proceed, please accept terms Accept terms In order to proceed, please accept terms,',
      // description: 'In order to proceed, please accept terms Accept terms In order to proceed, please accept terms',
      pattern: 'true',
      required: true,
      value: false,
      appearance: 'standard',
    },
    validation: {
      messages: {
        pattern: 'Please accept the terms',
      },
    },
  },
];

export const SignupDataModel = {
  username: '',
  email: '',
  password: '',
  plainPassword: '',
  privacy: false,
};
