import {Inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadTypeComponent} from '@gomcodoctor/formly/file-upload/file-upload.type';
import {FormlyModule} from '@ngx-formly/core';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import icEdit from '@iconify/icons-ic/twotone-edit';
import {ShowdownModule} from 'ngx-showdown';

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
        MatCardModule,
        MatIconModule,
        IconModule,
        ShowdownModule,
    ]
})
export class FileUploadModule {
  icEdit = icEdit;

}
