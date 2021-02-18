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
                        label: 'Code',
                        placeholder: 'Code',
                        required: true,
                    },
                },
                {
                    key: 'title',
                    type: 'input',
                    templateOptions: {
                        label: 'Title',
                        placeholder: 'Title',
                        required: true,
                    },
                },
                {
                    key: 'metaDescription',
                    type: 'textarea',
                    templateOptions: {
                        label: 'metaDescription',
                        // placeholder: 'Excerpt',
                        required: true,
                        autosize: true,
                        autosizeMinRows: 5,
                        autosizeMaxRows: 10,
                    },
                },
                {
                    key: 'content',
                    type: 'quill',
                    templateOptions: {
                        label: 'Content',
                        placeholder: 'Content',
                        required: false,
                    },
                },
            ]
        },
        // {
        //     templateOptions: {label: 'Images'},
        //     fieldGroup: [
        //         {
        //             key: 'images',
        //             type: 'file',
        //             templateOptions: {
        //                 // label: 'query',
        //                 resource: 'articleimages',
        //                 label: 'Location',
        //                 placeholder: 'Location',
        //                 multiple: true,
        //                 required: true,
        //                 appearance: 'outline'
        //             },
        //         },
        //     ]
        // }
        ],
    }
];
