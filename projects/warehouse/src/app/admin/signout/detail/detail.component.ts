import { Component, OnInit } from '@angular/core';
import {AuthService} from '@gomcodoctor/services/auth';
@Component({
  selector: 'gomco-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.invalidate();
  }
  backClicked() {
    window.history.back();
  }

}
