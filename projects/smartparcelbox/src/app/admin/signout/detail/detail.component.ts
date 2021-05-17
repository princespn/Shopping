import { Component, OnInit } from '@angular/core';
import {AuthService} from '@gomcodoctor/services/auth';
import {LayoutComponent} from '@app/admin/layout/layout.component';
@Component({
  selector: 'gomco-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private authService: AuthService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // this.customComponent.titleObserver.next('Sign out');
  }
  logout() {
    this.authService.invalidate();
  }
  backClicked() {
    window.history.back();
  }

}
