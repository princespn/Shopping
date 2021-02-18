import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GeolocationService} from '@gomcodoctor/services/geolocation/geolocation.service';

@Component({
  selector: 'gomco-google-map-direction',
  templateUrl: './google-map-direction.component.html',
  styleUrls: ['./google-map-direction.component.scss']
})
export class GoogleMapDirectionComponent implements OnInit {

  lat: any = null;
  long: any = null;

  centerLatitude = this.lat;
  centerLongitude = this.long;

  origin;

  destination;

  constructor(@Inject(MAT_DIALOG_DATA) public param: any, public dialogRef: MatDialogRef<any>, private geolocationService: GeolocationService){
    // dialogRef.disableClose = true;
    this.destination = param;
  }

  ngOnInit(): void {
    this.origin = {lat: this.geolocationService.lat, lng: this.geolocationService.long};
  }

}
