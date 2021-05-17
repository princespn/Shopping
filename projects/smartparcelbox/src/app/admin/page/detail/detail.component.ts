import {Component, Input} from '@angular/core';


@Component({
  selector: 'gomco-page-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  resourcePath = 'pages';
  resource = 'pages';
  metaTitleField = 'channelOrderId';
  @Input() title;

}
