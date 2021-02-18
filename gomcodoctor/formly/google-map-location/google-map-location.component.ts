import { Component } from '@angular/core';
import {FieldType} from '@ngx-formly/material';

@Component({
  selector: 'gomco-formly-google-map-location',
  template: `<gomco-google-map-location-input [required]="to.required" [formControl]="formControl" [formlyAttributes]="field" ></gomco-google-map-location-input>`,
  styleUrls: ['./google-map-location.component.scss']
})
export class GoogleMapLocationComponent extends FieldType {

}
