import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  Validator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  AbstractControl, ValidationErrors
} from '@angular/forms';
import {GeolocationService} from '@gomcodoctor/services/geolocation/geolocation.service';

/** This allows support [(ngModel)] and ngControl. */
const MAP_LOCATION_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GoogleMapLocationInputComponent),
      multi: true
    };

/** This allows control required validation. */
const MAP_LOCATION_VALUE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GoogleMapLocationInputComponent),
  multi: true,
};

@Component({
  selector: 'gomco-google-map-location-input',
  templateUrl: './google-map-location-input.component.html',
  styleUrls: ['./google-map-location-input.component.scss'],
  providers: [MAP_LOCATION_VALUE_ACCESSOR, MAP_LOCATION_VALUE_VALIDATOR],

})
export class GoogleMapLocationInputComponent implements OnInit, ControlValueAccessor, Validator {

  lat: any;
  long: any;

  private centerLatitude: any;
  private centerLongitude: any;

  disabled: boolean;

  /** A flag indicating if rating is required for form validation. */
  @Input() required = false;

  onChange = (_: any) => {
  }

  onTouched = () => {
  }

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    if (!this.lat){
      this.geolocationService.loadLocation();
      this.geolocationService.cordSubject.subscribe(value => {
        if (!this.lat){
          this.lat = value[0];
          this.long = value[1];
        }
      });
    }
  }

  markerDragEnd(event) {
    // this.lat = event.latLng.lat();
    // this.long = event.latLng.lng();
    this.centerLatitude = event.lat;
    this.centerLongitude = event.lng;
    this.onChange(event);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return (this.required && !control.value) ? { required: true } : null;
  }

  writeValue(obj: any): void {
    this.lat = obj.lat;
    this.long = obj.lng;
  }

}
