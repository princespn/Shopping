import {Component, OnInit} from '@angular/core';
import {Fields} from './fields';
import {BaseComponent} from '@app/BaseComponent';
import {map} from 'rxjs/operators';

@Component({
  selector: 'gomco-user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent extends BaseComponent implements OnInit {

  fetchData = false;

  groups: any = this.apiService.getList({}, 'usergroups').pipe(map(
      (response: any) => {
        return response.data.map((group: any) => {
          return {label: group.name, value: group['@id']};
        });
      }
  ));

  realRoles: any = this.apiService.getList({}, 'roles').pipe(map(
      (response: any) => {
        return response.data.map((group: any) => {
          return {label: group.name, value: group.role};
        });
      }
  ));

  fields = Fields(this.groups, this.realRoles);

}
