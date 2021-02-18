import { FormlyFieldConfig } from '@ngx-formly/core';

export function prefixSuffixExtension(field: FormlyFieldConfig) {
    if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('prefixSuffix') !== -1)) {
        return;
    }

    if (field.templateOptions.addonLeft || field.templateOptions.addonRight) {
        field.wrappers = [...(field.wrappers || []), 'prefixSuffix'];
    }
}
