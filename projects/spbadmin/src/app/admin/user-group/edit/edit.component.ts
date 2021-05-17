import {Component} from '@angular/core';
import {Fields} from '@app/admin/user-group/edit/fields';
import {map} from 'rxjs/operators';
import {BaseService} from '@gomcodoctor/services/base.service';

@Component({
  selector: 'gomco-user-group-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {

  constructor(protected apiService: BaseService) {
  }
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
