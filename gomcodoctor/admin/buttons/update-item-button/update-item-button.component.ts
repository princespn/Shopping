import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';


@Component({
  selector: 'gomco-update-item-button',
  templateUrl: './update-item-button.component.html',
  styleUrls: ['./update-item-button.component.scss']
})
export class UpdateItemButtonComponent extends BaseButtonComponent implements OnInit{
  @Output() updated: EventEmitter<any> = new EventEmitter();
  @Input() data;
  @Input() titleDialog;

updateRow(idRow: any, data: any) {

  const message = 'Are you sure you want to ' + this.label + ' ?';

  this.confirmationDialogService.openConfirmDialog(message).subscribe((confirmed: boolean) => {
      if (confirmed){
        this.loading = true;
        this.baseService.update(data, this.resource, {id: idRow}).subscribe(
          {
            next: value => {
              this.snackBarCustomService.openSnackBar('Updated successfully!');
              this.loading = false;
              this.updated.emit(true);
              this.navigate();
            },
            error: err => {
              this.loading = false;
            }
          }
        );
      }
    });
  }

}
