import { Component } from '@angular/core';
import {LayoutComponent} from '@app/admin/layout/layout.component';

@Component({
  selector: 'gomco-pages-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  resourcePath = 'pages';
  resource = 'pages';

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // this.customComponent.titleObserver.next('Help');
  }


}
