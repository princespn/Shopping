import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {ButtonsModule} from "@gomcodoctor/admin/buttons/buttons.module";


@NgModule({
  declarations: [ListComponent, EditComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        MatCardModule,
        FlexLayoutModule,
        MatCheckboxModule,
        MatButtonModule,
        ContainerModule,
        FormlyFormModule,
        ListModule,
        NamedRouteModule,
        NamedRouteModule,
        ButtonsModule
    ]
})
export class ProductModule { }
