import {AbstractControl} from '@angular/forms';

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
