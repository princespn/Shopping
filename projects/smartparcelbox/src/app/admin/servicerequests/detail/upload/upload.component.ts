import {Component, Input} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'gomco-file-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  resourcePath = 'servicerequests';
  resource = 'ticket_messages';

  @Input() dialogRef;

  model: any = {feedType: 'PURCHASE_ORDER_RECEIPT_FILE'};

  fields = Fields();

}
