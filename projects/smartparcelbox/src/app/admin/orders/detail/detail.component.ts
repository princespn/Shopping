import {Component, ViewChild} from '@angular/core';
import icMail from '@iconify/icons-ic/twotone-mail';
import {BaseService} from '@gomcodoctor/services/base.service';
import {MultiplayerService} from '@app/admin/services/cruncy/multiplayer.service';
import icEdit from '@iconify/icons-ic/twotone-edit';
import faGlobeEurope from '@iconify/icons-fa-solid/globe-europe';
import faPlus from '@iconify/icons-fa-solid/plus';
import {MatDialog} from '@angular/material/dialog';
import {TrackingDetailComponent} from '@app/admin/orders/tracking-detail/tracking-detail.component';
import {Fields} from './edit-order-fields';
import {ItemFields} from '@app/admin/orders/order-row/add-item-fields';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {NavigationService} from '@gomcodoctor/services/navigationservice/navigation.service';

@Component({
  selector: 'gomco-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  resourcePath = 'orders';
  resource = 'orders';
  resourceItem = 'orderitems';
  imageExtension = '.png';
  folderPath = '/assets/img/courier_status/s_';
  icMail = icMail;
  icEdit = icEdit;
  faGlobeEurope = faGlobeEurope;
  faPlus = faPlus;
  haveParcelBox: boolean;
  link: string;
  options: any;
  date = new Date();
  editFields = Fields(this, this.date);
  addItemFields = ItemFields();
  itemResource = 'orderitems';
  isFirstStep = false;
  @ViewChild('detailRef') detailRef;
  metaTitleField = 'channelOrderId';
  channelSubject$ = new BehaviorSubject([]);
  courierSubject$ = new BehaviorSubject([]);
  // tslint:disable-next-line:max-line-length
  constructor(protected apiService: BaseService, public multiplayer: MultiplayerService, public dialog: MatDialog, public navigationService: NavigationService) {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.getSPB();
  }
  openDialog(order, shipPosition): void {
    const dialogRef = this.dialog.open(TrackingDetailComponent, {
      width: '60%',
      data: {orderData: order, position: shipPosition}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      this.detailRef.getData();
    });
  }
  getImagePath(status: any){
    return   this.folderPath + status + this.imageExtension;
  }

  reloadScreen(){
    this.detailRef.getData();
    // this.data = null;
  }

  successCallback = (response) => {
    this.detailRef.getData();
  }

  orderModelModifier = (model) => {
    this.channelSubject$.next([{...model.channel}]);

    const courieres = [];
    model.shipments.forEach(value => {
      if (value.courierTracking) { courieres.push({...value.courierTracking.courier}); }
    });

    this.courierSubject$.next(courieres);
    model.channel = model.channel['@id'];

    model.shipments.forEach((value) => {
      if (value.courierTracking) { value.courierTracking.courier = value.courierTracking.courier['@id']; }
    });

    if (model.shipments.length === 0) { model.shipments = null; }
    // tslint:disable-next-line:max-line-length
    // if (model.shipments.length === 0) { model.shipments = [{  method: '1', shipmentType: 'shipment', state: 'shipped', courierTracking: {courier: null}}]; }

  }

  itemModelModifier = (model) => {
    model.unitPrice = model.unitPrice / 100;
  }
  itemModelModifierBeforeCall = (model) => {
    const finalModel = {...model};
    finalModel.unitPrice = Math.round(model.unitPrice * 100) ;
    finalModel.orderStatus = 'shipped';
    return finalModel;
  }

  isAllItemReturnInitiated(order) {
    let allInitiated = true;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < order.items.length; i++) {
      if (!order.items[i].returnInitiated){
        allInitiated = false;
        break;
      }
    }
    return  allInitiated;
  }


  getSPB() {
    this.apiService.getOne('me', 'myspbox').subscribe((response: any) => {
      console.log(response);
      this.haveParcelBox = true;
      },
      (error) => {
        this.haveParcelBox = false;
      });
  }

  sendEmailToCourier(courierNumber, recipient) {
    const opts = {
          cc: 'support@smartparcelbox.com',
          // bcc: 'bcc.this.person@dontgohere.com',
          subject: 'Delivery instruction for Tracking number: #' + courierNumber,
          body: 'If I’m not available in person to take a delivery, please drop the parcel at my SMART PARCEL BOX located at ———. The driver should scan the unique barcode in the delivery chute as the proof of delivery. I authorise you to use this scan as proof of delivery. Please DO NOT leave/deliver the parcel elsewhere.'
        };
    this.link = 'mailto:';
    this.link += window.encodeURIComponent(recipient);
    const params = [];

    Object.entries(opts).map(([key, value]) => params.push(key.toLowerCase() + '=' + window.encodeURIComponent(value)));

    if (params.length > 0) {
      this.link += '?' + params.join('&');
    }
    return this.link;
  }

  sendEmailToRetailer(retailerEmail) {
    const opts = {
          cc: 'shoppingmanager@smartparcelbox.com',
          // bcc: 'bcc.this.person@dontgohere.com',
          subject: 'Request To Join Shopping Manager App',
          body: 'Hello,\n' +
            'I am reaching you out because I am using Shopping Manager app which tracks my parcels and also store all my shopping in one place.\n' +
            '\n' +
            'But as a merchant you aren\'t connected with this app, so I have to add my order detail manually. \n' +
            '\n' +
            'I request you to join Shopping Manager app merchant program, so that future order detail will be saved automatically in this app and will make my experience with this app more pleasant.\n' +
            'Thank you in advance for your help.\n' +
            '\n' +
            'Best,'
        };
    this.link = 'mailto:';
    this.link += window.encodeURIComponent(retailerEmail);
    const params = [];

    Object.entries(opts).map(([key, value]) => params.push(key.toLowerCase() + '=' + window.encodeURIComponent(value)));

    if (params.length > 0) {
      this.link += '?' + params.join('&');
    }
    return this.link;
  }
  contactRetailer(retailerEmail) {
    const opts = {
          // cc: 'rajeev@homescapesonline.com',
          // bcc: 'bcc.this.person@dontgohere.com',
          subject: 'Customer Query',
          body: ''
        };
    this.link = 'mailto:';
    this.link += window.encodeURIComponent(retailerEmail);
    const params = [];

    Object.entries(opts).map(([key, value]) => params.push(key.toLowerCase() + '=' + window.encodeURIComponent(value)));

    if (params.length > 0) {
      this.link += '?' + params.join('&');
    }
    return this.link;
  }

  setMessage(orderData) {
    if (orderData.tag?.name) {
      return orderData.tag?.name;
    } else if (orderData.checkpoints[0]?.message) {
      return orderData.checkpoints[0]?.message;
    } else {
      return 'Sorry, this number can\'t be tracked because we don\'t support this courier at this moment.';
    }
  }
  orderUpdated = (value) => this.detailRef.data = value;
  rowUpdated = (index, value) => this.detailRef.data.items[index] = value;
  onDeletion = (index) => this.detailRef.data.items.splice(1, index);

  deleteOrderCallback() {
    this.navigationService.navigateByRouteName('admin_orders_list');
  }

}
