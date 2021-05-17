import {Component} from '@angular/core';
import {Fields} from './fields';

@Component({
  selector: 'homescapes-supplier-product-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  resourcePath = 'supplier-products';
  resource = 'supplierproducts';

  fields = Fields();
  fetchData = false;

}
