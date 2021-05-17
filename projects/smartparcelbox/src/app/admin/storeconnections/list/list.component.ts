import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'channelaccesstokens';
  resource = 'channelaccesstokens';
  anyConnected = false;

  items = [ 'Auto import and track all your shipments.',  'Notifies you when shipments are In Transit, Out For Delivery, Delivered or have an Exception.', 'Find out if shipments are delivered on time and reduce enquiries about order status.', 'Self-service returns.',  'Track all return statuses in one interactive dashboard'];


  constructor( public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.customComponent.titleObserver.next('Store Connections');
  }
  setAnyConnected(value: boolean){
    if (!this.anyConnected) {
      this.anyConnected = value;
    }
  }

}


