import {Component, Inject} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icAdd from '@iconify/icons-ic/twotone-add';
import {Fields} from './create-order-fields';
@Component({
  selector: 'homescapes-orders-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{

   resourcePath = 'orders';
  resource = 'orders';
  icEdit = icEdit;
  icAdd = icAdd;
  date = new Date();
  addFields = Fields(this.date);
  model = {orderStatus: 'shipped', shipments: [{  method: '1', shipmentType: 'shipment', state: 'shipped'}]};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'query',
          type: 'input',
          templateOptions: {
            placeholder: 'name',
            required: false,
          },
        }
      ]
    }
  ];

}
