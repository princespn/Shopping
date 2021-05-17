import {Component, Inject} from '@angular/core';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icArrowBack from '@iconify/icons-ic/close';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import {BaseService} from '@gomcodoctor/services/base.service';
import faGlobeEurope from '@iconify/icons-fa-solid/globe-europe';
import {NavigationService} from '@gomcodoctor/services/navigationservice/navigation.service';

@Component({
  selector: 'gomco-tracking-detail',
  templateUrl: './tracking-detail.component.html',
  styleUrls: ['./tracking-detail.component.scss']
})
export class TrackingDetailComponent {
  imageExtension = '.png';
  icPhone = icPhone;
  icMail = icMail;
  faGlobeEurope = faGlobeEurope;
  icMenu = icMenu;
  icArrowBack = icArrowBack;
  icMoreVert = icMoreVert;
  folderPath = '/assets/img/courier_status/s_';
  deleteResponse: any;
  finalData = {tag: 'delivered'};

  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<TrackingDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: { orderData: any, position: number }, public ngservice: NavigationService, public dialog: MatDialog, protected baseService: BaseService) {}

  getImagePath(status: any) {
    return this.folderPath + status + this.imageExtension;
  }

  onBackPressed() {
    this.dialogRef.close();
  }

  onShipmentDeleted() {
    this.dialogRef.close('shipmentDeleted');

  }

  setMessage(orderData) {
    if (orderData.tag?.name) {
      return orderData.tag?.name;
    } else if (orderData.checkpoints[0]?.message) {
      return orderData.checkpoints[0]?.message;
    } else {
      return 'Sorry, this number can\'t be tracked because we don\'t support this courier at this moment. We will consider this courier integration in next development phase.';
    }
  }
  getCode(orderData) {
    if (orderData.tag?.code) {
      return 'delivered';
    } else if (orderData.checkpoints[0]?.status.code) {
      return orderData.checkpoints[0]?.status.code;
    } else {
      return 'pending';
    }
  }

}


