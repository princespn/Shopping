import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';
import {ConfirmationDialogService} from '@gomcodoctor/services/confirmation-dialog/confirmation-dialog.service';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';


@Component({
  selector: 'gomco-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent extends BaseButtonComponent implements OnInit{

  icDeleteForever = icDeleteForever;
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  successMessage: string;


  ngOnInit() {
    super.ngOnInit();
    this.name = 'Items';
  }

  delete() {
    const finalData = {id: this.id ? this.id : this.row['@id']};
    const method = 'delete';

    const message = 'Are you sure you want to delete ' + this.name + ' ?';

    this.confirmationDialogService.openConfirmDialog(message).subscribe((confirmed: boolean) => {
      if (confirmed){
        this.loading = true;
        this.baseService.delete(finalData, this.resource).subscribe(
          {
            next: value => {
              this.loading = false;
              this.deleted.emit(true);
              this.navigate();
              this.successMessage = this.resource + '.' + method + '.' + 'success';
              this.snackBarCustomService.openSnackBar(this.successMessage);

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
