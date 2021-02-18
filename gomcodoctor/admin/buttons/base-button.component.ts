import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-base-button',
  template: '<div></div>',
})
export class BaseButtonComponent implements OnInit {

  @Input() label;

  @Input() id;

  @Input() row;

  @Input() resource;

  @Input() resourcePath;

  @Input() name;

  loading = false;

  @Output() updated: EventEmitter<any> = new EventEmitter();

  constructor(protected baseService: BaseService) {
  }

  ngOnInit(): void {
  }

  update(data) {
    const param = {id: this.row['@id']};
    this.loading = true;
    this.baseService.update(data, this.resource, param).subscribe(
      {
        next: value => {
          // this.row = value;
          this.updated.emit(value);
          this.loading = false;
        },
        error: err => {
          this.loading = false;
        }
      }
    );
  }

}
