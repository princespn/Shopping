import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Fields} from '@app/admin/orders/return/fields';
import {SelectionModel} from '@angular/cdk/collections';
import {SnackBarCustomService} from '@gomcodoctor/_helper/snackBar.custom.service';

@Component({
  selector: 'gomco-add-tracking',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  @Input() order = {items: []};
  @Input() orderId: any;
  @Input() code: any;
  @Input() lable: string;
  @Input() title: string;
  @Input() icon: any;
  @Input() textColor = 'default';
  @ViewChild('stepper') stepper;
  isFirstStep: boolean;
  resourcePath = 'shipments';
  resource = 'shipments';
  fields;
  model = {units: []};

  constructor(protected snackBarCustomService: SnackBarCustomService) {}

  columns = [
    {
      key: 'title',
      label: 'Select all Items',
    }
  ];

  ngOnInit(): void {
    this.fields = Fields(this.order.items);
    if (this.order.items.length > 0){
      this.isFirstStep = true;
      console.log(this.isFirstStep);
    }
  }

  next(selection: SelectionModel<any>) {
    if (selection.selected.length < 1) {
      this.snackBarCustomService.openSnackBar('Please select atleast one to continue');
      return false;
    }

    this.model.units = [];
    selection.selected.map(itemId => {
      const orderItem = this.order.items.find(value => value['@id'] === itemId);
      this.model.units.push({orderItem: itemId, quantity: orderItem.quantity});
      this.model = {...this.model};
    });
    return true;
  }


  modelModifierBeforeCall = (model) => {
    model.method = '1';
    if (this.code === 0) {
      model.shipmentType = 'shipment';
    } else if (this.code === 1) {
      model.shipmentType = 'return';
    }
    model.order = this.orderId;
    return model;
  }

  isItemCheckBoxDisabled = (row) => {
    if (row.returnInitiated){
      return true;
    }else{
      return false;
    }
  }

  @Input() successCallback = (response) => {
    return response;
  }

}
