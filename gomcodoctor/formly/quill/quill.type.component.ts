import { Component } from '@angular/core';
import {FieldType} from '@ngx-formly/material';

@Component({
  selector: 'gomco-formly-quill',
  template: `
    <div>
      <quill-editor [readOnly]="to.readonly" [required]="to.required" [formControl]="formControl" [formlyAttributes]="field" [styles]="{height: '250px'}">
      </quill-editor>
    </div>
  `,
  styleUrls: ['./quill.component.scss']
})
export class QuillTypeComponent extends FieldType {
}
