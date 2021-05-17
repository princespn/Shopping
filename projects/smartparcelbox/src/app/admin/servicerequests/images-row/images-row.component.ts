import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gomco-images-row',
  templateUrl: './images-row.component.html',
  styleUrls: ['./images-row.component.scss']
})
export class ImagesRowComponent implements OnInit {
  @Input() row;
  @Input() onDeletion;
  @Input() index;
  resourcePath = 'servicerequests';
  resource = 'ticket_messages?ticket=';


  ngOnInit(): void {
  }

}

