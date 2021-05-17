import {Component, OnInit} from '@angular/core';
import {FieldWrapper, FormlyFormOptions} from '@ngx-formly/core';
import {Fields} from '@app/admin/orders/process-return/reason.fields';
import {assign} from 'lodash';
import icKeyboardArrowRight from '@iconify/icons-ic/twotone-keyboard-arrow-right';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'formly-wrapper-panel',
  templateUrl: './select-item-return-wrapper.component.html',
})

export class SelectItemReturnWrapperComponent extends FieldWrapper implements OnInit{

  resource = 'shipments';
  reasonFields;
  dialogRef: any;
  icKeyboardArrowRight = icKeyboardArrowRight;
  condition: any;
  reason: any;
  reasonModel = {reason: null, requestType: null, message: null, resolutionRequired: null};
  reasonOptions: FormlyFormOptions = {
    formState: {},
  };
  reasonForm = new FormGroup({});

  item(){
    return this.to.items?.find(value => {
      return value['@id'] === this.field.model.orderItem;
    });
  }

  ngOnInit(): void {
    this.reasonFields = Fields();
  }

  dialogClosed(value) {
    if (this.reasonForm.valid) { this.field.parent.formControl.patchValue({message: this.model.message}); }
    else {  this.field.parent.formControl.patchValue({message: null}); }
  }

  submit = (model) => {
    this.reason = this.reasonOptions.formState.reason?.find(value => value['@id'] === this.reasonModel.reason);
    this.condition = this.reasonOptions.formState.requestType?.find(value => value['@id'] === this.reasonModel.requestType);
    assign(this.model, this.reasonModel);
    this.field.parent.formControl.patchValue({message: this.model.message});
  }
}
