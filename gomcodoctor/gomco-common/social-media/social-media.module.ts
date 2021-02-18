import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';
import {ShareModule} from 'ngx-sharebuttons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [ShareComponent],
    exports: [
        ShareComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        FontAwesomeModule,
        MatButtonModule
    ]
})
export class SocialMediaModule { }
