import { Component } from '@angular/core';
import {FieldType} from '@ngx-formly/material';

@Component({
  selector: 'gomco-rating-formly',
  template: `
      <div fxLayout="row" fxLayoutAlign="start end">
        <span class="rating-label">Rating:</span>
        <bar-rating  [max]="5" [readOnly]="to.readonly" [required]="to.required" [formControl]="formControl" [formlyAttributes]="field"></bar-rating>
      </div>
  `,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent extends FieldType {

}
