import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapLocationComponent } from './google-map-location.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    declarations: [GoogleMapLocationComponent],
    exports: [
        GoogleMapLocationComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        AgmCoreModule
    ]
})
export class GoogleMapLocationModule { }
