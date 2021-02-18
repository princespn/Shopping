import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Location, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import {GeolocationService} from '@gomcodoctor/services/geolocation/geolocation.service';

@Component({
  selector: 'gomco-google-map-select-location',
  templateUrl: './google-map-select-location.component.html',
  styleUrls: ['./google-map-select-location.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GoogleMapSelectLocationComponent implements OnInit {
  lat: any = null;
  long: any = null;

  centerLatitude = this.lat;
  centerLongitude = this.long;
  public selectedAddress: PlaceResult;

  constructor(@Inject(MAT_DIALOG_DATA) public param: any, public dialogRef: MatDialogRef<any>, private geolocationService: GeolocationService){
    // dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.lat = this.geolocationService.lat;
    this.long = this.geolocationService.long;
  }

  successCallback = () => {
    this.geolocationService.setCoords(this.centerLatitude, this.centerLongitude);
    this.dialogRef.close({lat: this.centerLatitude, long: this.centerLongitude});
  }

  markerDragEnd(event) {
    // this.lat = event.latLng.lat();
    // this.long = event.latLng.lng();
    this.centerLatitude = event.lat;
    this.centerLongitude = event.lng;
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.lat = location.latitude;
    this.long = location.longitude;
  }

  onGermanAddressMapped($event: GermanAddress) {
    console.log('onGermanAddressMapped', $event);
  }

}
