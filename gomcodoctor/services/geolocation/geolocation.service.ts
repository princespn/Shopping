import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MapsAPILoader} from '@agm/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

    lat;
    long;
    cordSubject = new Subject();
    locationNameSubject = new Subject();
    private geoCoder;
    private currentAddress: any;

    constructor(private mapsAPILoader: MapsAPILoader) { }

      private getLocation(): Observable<any> {
        return new Observable(observer => {
          if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                  observer.next(position);
                  observer.complete();
                },
                (error) => observer.error(error)
            );
          } else {
            observer.error('Unsupported Browser');
          }
        });
      }

    loadLocation() {
        if (typeof window !== 'undefined'){
            this.mapsAPILoader.load().then(() => {
                this.geoCoder = new google.maps.Geocoder();
                this.getCoords();
            });
        }
    }

    private getCoords() {
        const storedLocation = localStorage.getItem('location');
        if (storedLocation){
            const storedLocationObject = JSON.parse(storedLocation);
            const locationName = localStorage.getItem('locationName');
            this.setCoords(storedLocationObject.lat, storedLocationObject.long, locationName);
        }
        else {
            this.getLocation().subscribe(location => {
                this.setCoords(location.coords.latitude, location.coords.longitude);
            }, error => {
                console.log(error);
            });
        }
    }

    setCoords(lat, long, locationName = null){
        this.lat = lat;
        this.long = long;
        this.currentAddress = locationName;
        localStorage.setItem('location', JSON.stringify({lat: this.lat, long: this.long}));
        this.cordSubject.next([this.lat, this.long]);
        this.getLocationName();
    }

    private getLocationName(){
        if (!this.currentAddress){
            // return;
            this.geoCoder.geocode({location: {lat: this.lat, lng: this.long }}, (results, status) => {
                if (status === 'OK') {
                    if (results[0]) {
                        this.currentAddress = results[0].formatted_address;
                        localStorage.setItem('locationName', this.currentAddress);
                        this.locationNameSubject.next(this.currentAddress);
                        // this.searchElementRef.nativeElement.value = results[0].formatted_address);
                        // console.log(this.searchElementRef.nativeElement.value);
                        // infowindow.setContent(results[0].formatted_address);

                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }

            });
        }
        else { this.locationNameSubject.next(this.currentAddress); }

    }

}
