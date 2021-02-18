import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapLocationComponent } from './google-map-location.component';
import {GoogleMapLocationInputModule} from '@gomcodoctor/gomco-common/google-map-location-input/google-map-location-input.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';

@NgModule({
  declarations: [GoogleMapLocationComponent],
    imports: [
        CommonModule,
        FormlyModule.forChild({
            types: [
                {
                    name: 'google-map-location',
                    wrappers: ['form-field'],
                    component: GoogleMapLocationComponent,
                    defaultOptions: {
                        defaultValue: [],
                    },
                }
            ],
        }),
        GoogleMapLocationInputModule,
        ReactiveFormsModule,
        FormlyModule
    ]
})
export class GoogleMapLocationModule { }
