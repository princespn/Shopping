import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-list-row-input',
  templateUrl: './list-row-input.component.html',
  styleUrls: ['./list-row-input.component.scss']
})
export class ListRowInputComponent implements OnInit {

  @Input() row;
  @Input() fieldName;
  @Input() prefix;
  @Input() label;

  @Output() updated: EventEmitter<any> = new EventEmitter();

  formControl: FormControl;

  loading = false;
  success = false;

  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.formControl = new FormControl(this.row ? this.row[this.fieldName] : null);
  }


  update = () => {
    this.updateOffer({[this.fieldName]: this.formControl.value});
  }

  updateOffer(data){
    this.loading = true;
    this.success = false;
    this.baseService.update(data, null, {id: this.row['@id']}).subscribe({
      next: (response) => {
        // this.offer = response;
        this.loading = false;
        this.success = true;
        this.updated.emit(response);
      },
      error: err => {
        this.loading = false;
        this.success = false;
      }
    });
  }
}
