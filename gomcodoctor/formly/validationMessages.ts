import {FormlyFieldConfig} from "@ngx-formly/core";

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
