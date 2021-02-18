import {FilePickerAdapter, FilePreviewModel, UploadStatus} from 'ngx-awesome-uploader';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BaseService} from '@gomcodoctor/services/base.service';

export class DemoFilePickerAdapter extends FilePickerAdapter {
    constructor(private baseService: BaseService, private resource: string) {
        super();
    }
    public uploadFile(fileItem: FilePreviewModel) {
        const form = new FormData();
        form.append('file', fileItem.file);
        return this.baseService.post(form, this.resource, null, {reportProgress: true, observe: 'events'}).pipe(
            map( (res: HttpEvent<any>) => {
            if (res.type === HttpEventType.Response) {
                return {
                    body: res.body,
                    status: UploadStatus.UPLOADED
                };
            } else if (res.type ===  HttpEventType.UploadProgress) {
                // Compute and show the % done:
                const uploadProgress = +Math.round((100 * res.loaded) / res.total);
                return {
                    status: UploadStatus.IN_PROGRESS,
                    progress: uploadProgress
                };
            }
        }));

        // return this.http.request(req).pipe(
        //         map( (res: HttpEvent<any>) => {
        //             if (res.type === HttpEventType.Response) {
        //                 console.log(res);
        //                 return res.body.id.toString();
        //             } else if (res.type ===  HttpEventType.UploadProgress) {
        //                 // Compute and show the % done:
        //                 const UploadProgress = +Math.round((100 * res.loaded) / res.total);
        //                 return UploadProgress;
        //             }
        //         })
        //     );
    }

    public removeFile(fileItem: FilePreviewModel): Observable<any> {
        return this.baseService.delete({id: fileItem.uploadResponse.id}, this.resource);
    }
}
