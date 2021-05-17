import {Component, OnInit} from '@angular/core';
import {BaseButtonComponent} from '@gomcodoctor/admin/buttons/base-button.component';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent extends BaseButtonComponent implements OnInit{


  ngOnInit(): void {
  }

  toggle() {
    const data = {enabled: !this.row.enabled};
    super.update(data);
  }
}
