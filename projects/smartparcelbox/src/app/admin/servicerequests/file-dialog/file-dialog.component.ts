import {Component} from '@angular/core';

@Component({
  selector: 'gomco-file-dialog-detail',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.scss']
})
export class FileDialogComponent {
  resourcePath = 'servicerequests';
  resource = 'ticket_messages';
  url;
  format;
  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1){
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1){
        this.format = 'video';
      }

    }
  }
}
