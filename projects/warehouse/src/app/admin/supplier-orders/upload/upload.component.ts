import {Component, Input} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'gomco-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  resourcePath = 'feeds';

  resource = 'feeds';

  @Input() dialogRef;

  model: any = {feedType: 'PURCHASE_ORDER_RECEIPT_FILE'};

  fields = Fields();

}
