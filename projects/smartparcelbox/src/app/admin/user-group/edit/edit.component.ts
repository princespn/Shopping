import { Component, OnInit } from '@angular/core';
import {Fields} from '@app/admin/user-group/edit/fields';
import {BaseComponent} from '@app/BaseComponent';
import {map} from 'rxjs/operators';

@Component({
  selector: 'gomco-user-group-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends BaseComponent implements OnInit {

  realRoles: any = this.apiService.getList({}, 'roles').pipe(map(
    (response: any) => {
      return response.data.map((group: any) => {
        return {label: group.name, value: group.role};
      });
    }
  ));

  fields = Fields(this.realRoles);
  fetchData = false;

}
