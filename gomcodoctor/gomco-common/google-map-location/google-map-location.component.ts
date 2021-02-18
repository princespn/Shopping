import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gomco-google-map-location',
  templateUrl: './google-map-location.component.html',
  styleUrls: ['./google-map-location.component.scss'],

})

export class GoogleMapLocationComponent implements OnInit {

  @Input() lat: any;
  @Input() long: any;

  ngOnInit(): void {
  }

}
