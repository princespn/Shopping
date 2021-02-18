import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadTypeComponent} from '@gomcodoctor/formly/file-upload/file-upload.type';
import {FormlyModule} from '@ngx-formly/core';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [FileUploadTypeComponent],
    imports: [
        CommonModule,
        FormlyModule.forChild({
            types: [
                {
                    name: 'file',
                    // wrappers: ['form-field'],
                    component: FileUploadTypeComponent,
                    defaultOptions: {
                        defaultValue: [],
                    },
                }
            ],
        }),
        FilePickerModule,
        FlexModule,
        MatButtonModule,
    ]
})
export class FileUploadModule {

}
