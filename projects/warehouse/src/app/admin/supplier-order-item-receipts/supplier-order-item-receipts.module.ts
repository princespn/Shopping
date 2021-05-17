import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierOrderItemReceiptsRoutingModule } from './supplier-order-item-receipts-routing.module';
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';
import {ListRowInputComponent} from "@app/admin/supplier-order-item-receipts/list-row-input/list-row-input.component";
import {InlineEditModule} from "@gomcodoctor/formly/inline-edit";
import {ScrollbarModule} from "@vex/components/scrollbar/scrollbar.module";


@NgModule({
    declarations: [ListComponent, ListRowInputComponent],
    imports: [
        CommonModule,
        SupplierOrderItemReceiptsRoutingModule,
        MatCardModule,
        FlexLayoutModule,
        MatCheckboxModule,
        MatButtonModule,
        ContainerModule,
        FormlyFormModule,
        ListModule,
        NamedRouteModule,
        NamedRouteModule,
        MatDialogModule,
        ButtonsModule,
        InlineEditModule,
        ScrollbarModule
    ]
})
export class SupplierOrderItemReceiptsModule { }
