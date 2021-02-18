import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { ContainerModule } from '@vex/directives/container/container.module';
import {RouterModule} from '@angular/router';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        IconModule,
        ContainerModule,
        RouterModule,
        NamedRouteModule
    ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
}
