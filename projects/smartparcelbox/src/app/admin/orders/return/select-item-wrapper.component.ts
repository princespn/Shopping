import {Component, OnInit} from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import {Fields} from '@app/admin/orders/process-return/reason.fields';

@Component({
  selector: 'formly-wrapper-panel',
  templateUrl: './select-item-wrapper.component.html',
})

export class SelectItemWrapperComponent extends FieldWrapper implements OnInit{

  resource = 'shipments';
  reasonFields;
  reasonModel = {units: []};
  item(){
    return this.to.items?.find(value => {
      return value['@id'] === this.field.model.orderItem;
    });
  }

  ngOnInit(): void {
    this.reasonFields = Fields();
    this.field.templateOptions.max = this.item()?.quantity;
  }
}
