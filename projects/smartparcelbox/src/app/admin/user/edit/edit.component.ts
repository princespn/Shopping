import {Component} from '@angular/core';
import {Fields} from './fields';
import {map} from 'rxjs/operators';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent  {
  constructor(protected apiService: BaseService) {}
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
