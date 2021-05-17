import { Component } from '@angular/core';
import {Fields} from '@app/admin/helpfeedback/list/fields';


@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  resourcePath = 'ticket_request_types';
  resource = 'tickets';
  fields = Fields();
  fetchData = false;
  link: string;
  recipientEmail = 'shoppingmanager@smartparcelbox.com';
  model = {messages: [{}], subject: 'Feedback'};

  sendEmailFeedback() {
    const opts = {
      // cc: 'rajeev@homescapesonline.com',
      // bcc: 'bcc.this.person@dontgohere.com',
      subject: 'Shopping Manager feedback',
      body: ''
    };
    this.link = 'mailto:';
    this.link += window.encodeURIComponent(this.recipientEmail);
    const params = [];

    Object.entries(opts).map(([key, value]) => params.push(key.toLowerCase() + '=' + window.encodeURIComponent(value)));

    if (params.length > 0) {
      this.link += '?' + params.join('&');
    }
    return this.link;
  }

}
