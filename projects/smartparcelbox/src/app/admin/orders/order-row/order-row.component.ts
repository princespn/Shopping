import {Component, Input} from '@angular/core';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icAdd from '@iconify/icons-ic/twotone-add';
import {MultiplayerService} from '@app/admin/services/cruncy/multiplayer.service';
import {MatDialog} from '@angular/material/dialog';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Fields} from './edit-order-fields';
import {ItemFields} from '@app/admin/orders/order-row/add-item-fields';
import icNoteAdd from '@iconify/icons-ic/twotone-note-add';

@Component({
  selector: 'gomco-order-row',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.scss']
})
export class OrderRowComponent {
  // tslint:disable-next-line:max-line-length
  constructor( public multiplayer: MultiplayerService, public dialog: MatDialog) {}
  @Input() row;
  @Input() onDeletion;
  @Input() index;
  @Input() updateRowConst;
  @Input() order;
  resourcePath = 'orders';
  resource = 'orders';
  icEdit = icEdit;
  icAdd = icAdd;
  icNoteAdd = icNoteAdd;
  channelSubject$ = new BehaviorSubject([]);
  courierSubject$ = new BehaviorSubject([]);

  editFields = Fields(this);
  addItemFields = ItemFields();
  itemResource = 'orderitems';


  modelModifier = (model) => {
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

    if (model.shipments.length === 0) { model.shipments = [{  method: '1', shipmentType: 'shipment', state: 'shipped'}]; }

  }
  itemModelModifierBeforeCall = (model) => {
    const finalModel = {...model};
    finalModel.unitPrice = Math.round(model.unitPrice * 100) ;
    finalModel.orderStatus = 'shipped';
    return finalModel;
  }

  rowUpdated = (value) => this.row = value;


 }
