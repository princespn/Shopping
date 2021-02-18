import { Component, OnInit } from '@angular/core';
import { ShareService } from 'ngx-sharebuttons';

@Component({
  selector: 'gomco-social-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  buttons = [
      'facebook',
      'linkedin',
      'twitter',
      'pinterest',
      'whatsapp',
  ];

  constructor(public shareService: ShareService) { }

  ngOnInit(): void {
  }

}
