import {Component, ViewChild} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Fields} from '@app/admin/return-process/list/fields';
import {ConditionFields} from '@app/admin/return-process/list/conditionFields';

@Component({
  selector: 'gomco-return-process-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  resourcePath = 'return_process';
  resource = 'ticket_request_types';
  @ViewChild('createConditionForm') createConditionForm;
  fields = Fields();
  conditionFields = ConditionFields();
  reasonCode;
  fieldnams: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'query',
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
    {
      key: 'code',
      label: 'code',
    },
    {
      key: 'parentType.name',
      label: 'Parent',
    }
  ];
  createConditionModelModifierBeforeCall = (model) => {
    const finalModel = {...model};
    console.log(model.resolutionOptions);
    const resulationAry: [] = model.resolutionOptions.split(',');
    finalModel.resolutionOptions = resulationAry;
    finalModel.parentType = this.reasonCode;
    return finalModel;
  }
  getRow(row){this.reasonCode = row.code; }

}
