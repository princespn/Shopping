import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {BaseService} from '@gomcodoctor/services/base.service';
import {map} from 'rxjs/operators';
import {Fields} from '@app/admin/user-group/edit/fields';

@Component({
  selector: 'gomco-user-group-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {

  resourcePath = 'userGroups';
  resource = 'usergroups';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'name',
          type: 'input',
          templateOptions: {
            placeholder: 'name',
            required: false,
          },
        }
      ]
    }
  ];

  columns = [
    {
      key: 'name',
      label: 'name',
    },
  ];

  constructor(protected apiService: BaseService) {}

  realRoles: any = this.apiService.getList({}, 'roles').pipe(map(
    (response: any) => {
      return response.data.map((group: any) => {
        return {label: group.name, value: group.role};
      });
    }
  ));

  editFields = Fields(this.realRoles);

}
