import {Component, OnInit} from '@angular/core';
import {AuthService} from '@gomcodoctor/services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'gomco-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  user: any;
  constructor(private authService: AuthService, public  routs: Router) {}
  optionsList = [{
    name: 'General',
    description: 'Email or user name',
    code: 'change-email-user-name'
  }, {
    name: 'Account security',
    description: 'Change password',
    code: 'account_change-password'
  }
/*    {
    name: 'Notifications',
    description: 'Notifications preferences',
    code: 'notifications_list'
  },*/
  ];

  ngOnInit(): void {
    this.authService.forceUserUpdate();
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }


}
