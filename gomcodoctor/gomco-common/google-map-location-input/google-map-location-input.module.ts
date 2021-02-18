import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapLocationInputComponent } from './google-map-location-input.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmCoreModule} from '@agm/core';



@NgModule({
    declarations: [GoogleMapLocationInputComponent],
    exports: [
        GoogleMapLocationInputComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        AgmCoreModule
    ]
})
export class GoogleMapLocationInputModule { }
