import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'gomco-order-row',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.scss']
})
export class OrderRowComponent implements OnInit {
  @Input() row;
  @Input() onDeletion;
  @Input() index;
  resourcePath = 'servicerequests';
  resource = 'ticket_messages?ticket=';


  ngOnInit(): void {
  }

}

