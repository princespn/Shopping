import {FormlyFieldConfig} from '@ngx-formly/core';

export function Fields(groups, realRoles): FormlyFieldConfig[]
{
    return [
        {
        type: 'tabs',
        fieldGroup: [{
            templateOptions: {label: 'Basic'},
            fieldGroup: [
                {
                    key: 'username',
                    type: 'input',
                    templateOptions: {
                        label: 'username',
                        placeholder: 'username',
                        required: true,
                    },
                },
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        label: 'email',
                        placeholder: 'email',
                        required: true,
                    },
                },
                {
                    key: 'enabled',
                    type: 'toggle',
                    templateOptions: {
                        label: 'enabled',
                        placeholder: 'enabled',
                        required: false,
                    },
                },
                {
                    key: 'plainPassword',
                    type: 'input',
                    templateOptions: {
                        label: 'Password',
                        placeholder: 'Password',
                        required: false,
                    },
                },
            ]
        },
            {
                templateOptions: {label: 'Permissions'},
                fieldGroup: [{
                    key: 'groups',
                    type: 'multicheckbox',
                    templateOptions: {
                        label: 'Group',
                        placeholder: 'Group',
                        required: false,
                        type : 'array',
                        options : groups,
                    },
                },
                    {
                        key: 'realRoles',
                        type: 'multicheckbox',
                        templateOptions: {
                            label: 'Roles',
                            placeholder: 'Roles',
                            required: false,
                            type : 'array',
                            options : realRoles,
                        },
                    }]
            }
        ],
    }
    ];
}
