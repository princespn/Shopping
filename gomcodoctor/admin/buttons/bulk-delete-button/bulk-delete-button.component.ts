import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';
import {BaseService} from '@gomcodoctor/services/base.service';
import {ConfirmationDialogService} from '@gomcodoctor/services/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'gomco-bulk-delete-button',
  templateUrl: './bulk-delete-button.component.html',
  styleUrls: ['./bulk-delete-button.component.scss']
})
export class BulkDeleteButtonComponent extends BaseButtonComponent{

  @Input() selected: [];

  @Output() deleted: EventEmitter<any> = new EventEmitter();

  constructor(baseService: BaseService, private confirmationDialogService: ConfirmationDialogService) {
    super(baseService);
    this.name = 'Items';
    this.label = 'Delete';
  }

  delete(key = 'id') {
    const finalData = this.selected.map(id => {
      return {[key]: id};
    });

    const message = 'Are you sure you want to delete ' + this.selected.length + ' items?';

    this.confirmationDialogService.openConfirmDialog(message).subscribe((confirmed: boolean) => {
      if (confirmed){
        this.loading = true;
        this.baseService.deleteBulk(finalData, this.resource).subscribe(
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
