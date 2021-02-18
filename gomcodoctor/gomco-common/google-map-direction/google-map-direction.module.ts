import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapDirectionComponent } from './google-map-direction.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmCoreModule} from '@agm/core';
import {MatButtonModule} from '@angular/material/button';
import {AgmDirectionModule} from 'agm-direction';



@NgModule({
  entryComponents: [GoogleMapDirectionComponent],
  declarations: [GoogleMapDirectionComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        FlexLayoutModule,
        AgmCoreModule,
        MatButtonModule,
        AgmDirectionModule
    ]
})
export class GoogleMapDirectionModule { }
