import {Component, EventEmitter, Output} from '@angular/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';
import {ConfirmationDialogService} from '@gomcodoctor/services/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'gomco-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent extends BaseButtonComponent {

  @Output() deleted: EventEmitter<any> = new EventEmitter();

  constructor(baseService: BaseService, private confirmationDialogService: ConfirmationDialogService) {
    super(baseService);
    this.name = 'Items';
    this.label = 'Delete';
  }

  delete() {
    const finalData = {id: this.id};

    const message = 'Are you sure you want to delete ' + this.name + ' ?';

    this.confirmationDialogService.openConfirmDialog(message).subscribe((confirmed: boolean) => {
      if (confirmed){
        this.loading = true;
        this.baseService.delete(finalData, this.resource).subscribe(
          {
            next: value => {
              this.loading = false;
              this.deleted.emit(true);
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
