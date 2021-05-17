import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'gomco-guest-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PagesComponent {
  resource = 'pages';
}
