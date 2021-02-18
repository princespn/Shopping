import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapSelectLocationComponent } from './google-map-select-location.component';
import {AgmCoreModule} from '@agm/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';


@NgModule({
  declarations: [GoogleMapSelectLocationComponent],
  entryComponents: [GoogleMapSelectLocationComponent],
    imports: [
        CommonModule,
        AgmCoreModule,
        MatButtonModule,
        MatDialogModule,
        FlexLayoutModule,
        MatGoogleMapsAutocompleteModule
    ]
})
export class GoogleMapSelectLocationModule { }
