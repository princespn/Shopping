import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import icShoppingBasket from '@iconify/icons-ic/twotone-shopping-basket';

@Component({
  selector: 'vex-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit, OnDestroy {

  @Input() customTemplate: TemplateRef<any>;
  icShoppingBasket = icShoppingBasket;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {}
}
