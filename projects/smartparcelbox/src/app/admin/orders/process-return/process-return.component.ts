import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SnackBarCustomService} from '@gomcodoctor/_helper/snackBar.custom.service';
import {Fields} from '@app/admin/orders/process-return/fields';
import {SelectionModel} from '@angular/cdk/collections';
import {FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'gomco-process-return',
  templateUrl: './process-return.component.html',
  styleUrls: ['./process-return.component.scss']
})
export class ProcessReturnComponent implements OnInit {

  @Input() order: any = {items: []};
  @Input() orderId: any;
  @Input() code: any;
  @Input() lable: string;
  @Input() title: string;
  @ViewChild('stepper') stepper;
  resourcePath = 'tickets';
  resource = 'tickets';
  fields;
  model = {messages: [{orderItems: [], files: []}]};

  today: any;
  createdDate: any;
  days: any;
  closeReturnDate: any;
  policyDays = 30;
  constructor(protected snackBarCustomService: SnackBarCustomService) {}


  columns = [
    {
      key: 'title',
      label: 'Select all Items',
    }
  ];

  ngOnInit(): void {
    this.fields = Fields(this.order.items);
    this.days = this.last30Days(this.order.createdAt);
    // console.log('Days: ' + this.days);
  }

  next(selection: SelectionModel<any>) {
    if (selection.selected.length < 1) {
      this.snackBarCustomService.openSnackBar('Please select at least one to continue');
      return false;
    }

    this.model.messages[0].orderItems = [];
    selection.selected.map(itemId => {
      const orderItem = this.order.items.find(value => value['@id'] === itemId);

      this.model.messages[0].orderItems.push({orderItem: itemId, quantity: orderItem.quantity});
      this.model = {...this.model};
    });

    return true;
  }

  modelModifierBeforeCall = (model) => {
    model.priority = 'low';
    model.status = 'open';
    model.subject = 'Return request for Order No:' + model.channelOrderId;
    model.order = this.orderId;
    return model;
  }

  isItemCheckBoxDisabled = (row) => {
    return  !!row.returnInitiated;
  }

  @Input() successCallback = (response) => {
    return response;
  }
  last30Days(orderCreateddate){
    this.createdDate = new Date(orderCreateddate);
    this.closeReturnDate = new Date(orderCreateddate);
    this.closeReturnDate.setDate(this.closeReturnDate.getDate() + this.policyDays);
    this.today = new Date();
    return   Math.round((this.today - this.createdDate ) / (1000 * 60 * 60 * 24));
  }
}
