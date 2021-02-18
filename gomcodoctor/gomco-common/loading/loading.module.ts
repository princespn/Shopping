import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectLoadingComponent } from './rect-loading/rect-loading.component';
import {ContentLoaderModule} from "@netbasal/ngx-content-loader";



@NgModule({
    declarations: [RectLoadingComponent],
    exports: [
        RectLoadingComponent
    ],
    imports: [
        CommonModule,
        ContentLoaderModule
    ]
})
export class LoadingModule { }
