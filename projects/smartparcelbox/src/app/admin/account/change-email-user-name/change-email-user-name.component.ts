import { Component, OnInit } from '@angular/core';
import {Fields} from '@app/admin/account/change-email-user-name/fields';

@Component({
  selector: 'gomco-change-email-user-name',
  templateUrl: './change-email-user-name.component.html',
  styleUrls: ['./change-email-user-name.component.scss']
})
export class ChangeEmailUserNameComponent{

  fields = Fields();
}
