import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {map} from 'rxjs/operators';
import {Fields} from '@app/admin/user/edit/fields';

@Component({
  selector: 'gomco-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {

  resourcePath = 'users';
  resource = 'users';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'username',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'username',
            required: false,
          },
        }
      ]
    }
  ];

  columns = [
    {
      key: 'username',
      label: 'username',
    },
    {
      key: 'enabled',
      label: 'Active',
      type: 'boolean'
    },
  ];

  constructor(protected apiService: BaseService) {}
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

  editFields = Fields(this.groups, this.realRoles);

}
