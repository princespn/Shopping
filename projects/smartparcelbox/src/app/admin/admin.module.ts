import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '@app/shared.module';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {FlexModule} from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { LayoutComponent } from './layout/layout.component';
import {CustomLayoutModule} from '@app/custom-layout/custom-layout.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [LayoutComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        ContainerModule,
        FlexModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        CustomLayoutModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSelectModule,
        MatDividerModule
    ]
})
export class AdminModule {}
