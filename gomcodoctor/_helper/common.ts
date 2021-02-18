import { FormGroup } from '@angular/forms';
import * as moment from 'moment';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function PatchCustomValue(value: { [key: string]: any }, form) {
  Object.keys(value).forEach((name) => {
    if (form[name]) {
      form[name].patchValue(value[name]);
    }
  });
}

export function getCustomizer(value, key = null) {
  if (!key && value) {
    value['boxImage'] = value['boxImageUrl'];
    value['profilePic'] = value['profilePicUrl'];
  }
  if (key && value && value['@id']) {
    return value['@id'];
  }
 // console.log(key)
  if (key && typeof key === 'string' && key.endsWith('Price')) {
    return value * 0.01;
  }
  if (key && typeof key === 'string' &&  key.endsWith('edAt')) {
    return new Date(value);
  }
}

export function Customizer(skipKeys) {
  const orderCustomizer = (value, key = null) => {
    if (key && !skipKeys.includes(key)) {
      if (key && value && value['@id']) return value['@id'];
      if (key && key.endsWith('Price')) return value * 0.01;
      if (key && key.endsWith('edAt')) return new Date(value);
    }
    if (!key && skipKeys && skipKeys.length) {
      skipKeys.map((data) => delete value[data]);
    }
  };
  return orderCustomizer;
}

export function PostCustomizer(skipKeys) {
  const post = (value, key = null) => {
    if (key && !skipKeys.includes(key)) {
      if (key && value && value['@id']) return value['@id'];
      if (key && key.endsWith('Price')) return parseInt((value * 100).toFixed(2))
      if (key && key.endsWith('edAt')) return moment(value).format('DD-MM-YYYY');
    }
    if (!key && skipKeys && skipKeys.length) {
      skipKeys.map((data) => delete value[data]);
    }
  };
  return post;
}