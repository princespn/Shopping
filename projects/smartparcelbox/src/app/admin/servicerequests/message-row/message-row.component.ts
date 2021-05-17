import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gomco-massage-row',
  templateUrl: './message-row.component.html',
  styleUrls: ['./message-row.component.scss']
})
export class MessageRowComponent implements OnInit {
  @Input() row;
  @Input() onDeletion;
  @Input() index;
  resourcePath = 'servicerequests';
  resource = 'ticket_messages?ticket=';


  ngOnInit(): void {
  }

}

