import {Component, ViewChild} from '@angular/core';
import icSend from '@iconify/icons-ic/twotone-send';
import icAttachment from '@iconify/icons-ic/twotone-attachment';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-servicerequests-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  resourcePath = 'servicerequests';
  resource = 'ticket_messages';
  icSend = icSend;
  icAttachment = icAttachment;
  request: MessageRequest;
  orderId;
  @ViewChild('ticketMessageList') ticketMessageList;
  @ViewChild('template') template;

   constructor(protected apiService: BaseService) {
   }
  getOrderId(id: string){
    this.orderId = id;
  }


  public postMessage(messageStr: any) {
    const storemsg = messageStr.value;
    messageStr.value = '';

    if (storemsg) {
      this.request = {
        message: storemsg,
        ticket: this.template.queryParams.id
      };

      this.apiService.post( this.request, 'ticket_messages').subscribe((response: any) => {
          this.ticketMessageList.products.push(response);
        },
        (error) => {
        });
    }
  }
}
export interface MessageRequest{
  message: string;
  ticket: string;
}
