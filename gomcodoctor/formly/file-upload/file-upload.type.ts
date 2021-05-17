import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {DemoFilePickerAdapter} from '@gomcodoctor/services/mock-file-picker.adapter';
import {FilePickerService, FilePreviewModel, UploaderCaptions} from 'ngx-awesome-uploader';
import {BaseService} from '@gomcodoctor/services/base.service';

import faCamera from '@iconify/icons-fa-solid/Camera';

@Component({
    selector: 'formly-file-upload-type',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.type.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FileUploadTypeComponent extends FieldType implements OnInit {
    adapter: DemoFilePickerAdapter;

    enableAutoUpload = true;
    preview = false;
    profilePic = false;
    singleFileSrc;
    faCamera = faCamera;

    captions: UploaderCaptions = {
        dropzone: {
            title: 'Add a photo',
            or: 'or',
            browse: 'Browse Image'
        },
        cropper: {
            crop: 'Kəs',
            cancel: 'Imtina'
        },
        previewCard: {
            remove: 'Sil',
            uploadError: 'Fayl yüklənmədi'
        }
    };

    // formControlValue;

    constructor(private baseService: BaseService, private filePickerService: FilePickerService){
        super();
    }

    ngOnInit() {
        this.adapter = new  DemoFilePickerAdapter(this.baseService, this.to.resource);
        this.enableAutoUpload = this.to.enableAutoUpload ?? true;
        this.profilePic = this.to.profilePic ?? true;
        this.preview = this.to.preview ?? false;
        // this.formControlValue = this.formControl.value;
        // console.log(this.formControl.value);
        // this.value();
    }

    multiple(){
        return this.to.multiple ? this.to.multiple : false;
    }

    // value(){
    //     const value = this.formControl.value;
    //     if (this.multiple()) { this.formControlValue = value ? value : []; }
    // }

    fileAdded(filePreviewModel: FilePreviewModel){
        if (!this.enableAutoUpload){
            this.formControl.setValue(filePreviewModel.file);
            this.singleFileSrc = this.filePickerService.createSafeUrl(filePreviewModel.file);
        }
        else { this.formControl.setErrors({incorrect: true}); }
    }

    onUploadSuccess(file: FilePreviewModel){
        if (this.multiple()){
            // this.value().push({id: file.fileId});
            // this.formControlValue.push(file.uploadResponse.id);
            // console.log(this.value());
            this.formControl.value.push(file.uploadResponse.id);
            this.formControl.setValue(this.formControl.value.slice(0));
        }
        else {
            this.formControl.setValue(file.uploadResponse.id);
        }
        this.formControl.setErrors(null);
    }

    removeImage(index){
        if (this.multiple()){
            this.formControl.value.splice(index, 1);
            this.formControl.setValue(this.formControl.value.slice(0));
        }
        else {
            this.formControl.setValue(null);
        }
    }

    onFileRemoved(file: FilePreviewModel){
        if (this.multiple()){
            const index = this.formControl.value.indexOf(file.uploadResponse.id);
            if (index !== -1) {
                this.formControl.value.splice(index, 1);
                this.formControl.setValue(this.formControl.value.slice(0));
            }
        }
        else {
            this.formControl.setValue(null);
        }
    }
}
