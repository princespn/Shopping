import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-channel-product-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  resourcePath = 'channel-products';
  resource = 'channelproducts';

  fields = Fields();
  fetchData = false;

}
