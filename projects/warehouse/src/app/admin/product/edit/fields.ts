export const Fields = [
    {
        type: 'tabs',
        fieldGroup: [{
            templateOptions: {label: 'Basic'},
            fieldGroup: [
                {
                    key: 'code',
                    type: 'input',
                    templateOptions: {
                        label: 'SKU',
                        placeholder: 'SKU',
                        required: true,
                      appearance: 'outline'
                    },
                },
                {
                    key: 'upc',
                    type: 'input',
                    templateOptions: {
                        label: 'EAN',
                        placeholder: 'EAN',
                        required: true,
                      appearance: 'outline'
                    },
                }
            ]
        },

        ],
    }
];
