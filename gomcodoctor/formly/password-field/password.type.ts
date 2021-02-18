import {Component, ChangeDetectionStrategy, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material';

@Component({
    selector: 'formly-field-mat-password',
    template: `
    <input
      matInput
      [id]="id"
      [type]="type || 'text'"
      [readonly]="to.readonly"
      [required]="to.required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex"
      [placeholder]="to.placeholder"
    />
    <ng-template #matSuffix>
        <span
                [ngStyle]="{cursor: 'pointer'}"
                (click)="click($event)"
        >
            <mat-icon>{{hidden ? 'visibility_off' : 'visibility'}}</mat-icon>
        </span>
    </ng-template>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordTypeComponent extends FieldType implements AfterViewInit, OnInit {
    @ViewChild(MatInput) formFieldControl!: MatInput;

    hidden = true;

    ngAfterViewInit() {
        if (this.matSuffix) {
            Promise.resolve().then(() => {
                this.to.suffix = this.matSuffix;
            });
        }
    }

    get type() {
        return this.hidden ? 'password' : 'text';
    }

    click($event: any) {
        this.hidden = !this.hidden;
    }
}
