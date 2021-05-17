import {Component, OnInit} from '@angular/core';
import {AuthService} from '@gomcodoctor/services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // resourcePath = 'channelaccesstokens';
  // resource = 'channelaccesstokens';
  user: any;

  constructor(private authService: AuthService, public  routs: Router) {
  }

  optionsList = [{
    name: 'Account security',
    description: 'Email or User Name',
    code: 'account_edit'
  }, {
    name: 'Account security',
    description: 'Change Password',
    code: 'account_change-password'
  },
  ];

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user;
      // this.cd.markForCheck();
    });
  }


}
