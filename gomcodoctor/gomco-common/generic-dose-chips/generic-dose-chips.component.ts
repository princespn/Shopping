import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gomco-generic-dose-chips',
  templateUrl: './generic-dose-chips.component.html',
  styleUrls: ['./generic-dose-chips.component.scss']
})
export class GenericDoseChipsComponent implements OnInit {

  @Input() brand;

  constructor() { }

  ngOnInit(): void {
  }

}
