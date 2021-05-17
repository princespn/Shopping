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
];

export const SignupDataModel = {
  username: '',
  email: '',
  password: '',
  plainPassword: '',
  privacy: false,
};
