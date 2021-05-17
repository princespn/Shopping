import {Component, Input} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'gomco-store-row',
  templateUrl: './store-row.component.html',
  styleUrls: ['./store-row.component.scss']
})
export class StoreRowComponent {

  @Input() row;

  resourcePath = 'channelaccesstokens';
  resource = 'channelaccesstokens';
  model = {connect: true};

  fields = Fields();
  isDisabled: boolean;
  timeLeft = 60;
  interval;


  rowUpdated = (value, startTime = true) => {
    this.row = value;
    if (startTime) { this.startTimer(); }
  }

  startTimer() {
    this.timeLeft = 60;
    this.isDisabled = true;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        this.isDisabled = false;
      }
    }, 1000);
  }
}
