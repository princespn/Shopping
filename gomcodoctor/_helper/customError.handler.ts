import { environment } from '@environments/environment';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

export const handleHttpError = (errorMsg, status, _matSnackBar) => {
  const _httpError = _matSnackBar.open(errorMsg, null, {
    duration: environment.snackBarTimeOut.httpError,
    verticalPosition: 'top',
    panelClass: ['http-error-handler-snackbar'],
  });

  _httpError.afterDismissed().subscribe(() => {
    if (status === 401) {
      localStorage.removeItem('currentUser');
      //location.replace('login');
    }
  });
};

export const HandleSuccess = (successMsg, _matSnackBar, redirection = null) => {
  const _httpError = _matSnackBar.open(successMsg, null, {
    duration: environment.snackBarTimeOut.httpError,
    verticalPosition: 'top',
    panelClass: ['http-success-handler-snackbar'],
  });

  _httpError.afterDismissed().subscribe(() => {
    if (redirection) {
      location.replace(redirection);
    }
  });
};

export const CustomErrorMessage = {
  httpError: {
    default: 'There is an error, Please try again.',
  },
};

export function validateRequired(err, field: FormlyFieldConfig) {
  return `${field.key}  is required`;
}
export function validateMinLength(err, field: FormlyFieldConfig) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}
export function validateMaxLength(err, field: FormlyFieldConfig) {
  return `Should have less than ${field.templateOptions.maxLength} characters`;
}
export function validateMin(err, field: FormlyFieldConfig) {
  return 'This value should be more than ' + field.templateOptions.min;
}
export function validateMax(err, field: FormlyFieldConfig) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function fieldMatchValidator(control: AbstractControl) {
  const { password, plainPassword } = control.value;

  // avoid displaying the message error when values are empty
  if (!plainPassword || !password) {
    return null;
  }

  if (plainPassword === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}

// Custom validation
export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
    ? null
    : { ip: true };
}
export function IpValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid IP Address`;
}
