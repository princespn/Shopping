import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatButtonModule} from '@angular/material/button';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {OrdersRoutingModule} from './orders-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';
import { OrderRowComponent } from './order-row/order-row.component';
import { ReturnComponent } from './return/return.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BreadcrumbsModule} from '@vex/components/breadcrumbs/breadcrumbs.module';
import {SelectItemWrapperComponent} from '@app/admin/orders/return/select-item-wrapper.component';
import {FormlyModule} from '@ngx-formly/core';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';
import {MatMenuModule} from '@angular/material/menu';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TrackingDetailComponent } from './tracking-detail/tracking-detail.component';
import {UpdateItemButtonComponent} from '@gomcodoctor/admin/buttons/update-item-button/update-item-button.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ProcessReturnComponent } from './process-return/process-return.component';
import {SelectItemReturnWrapperComponent} from '@app/admin/orders/process-return/select-item-return-wrapper.component';
import {DetailModule} from '@gomcodoctor/gomco-common/detail/detail.module';
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  // tslint:disable-next-line:max-line-length
    declarations: [ListComponent, DetailComponent, OrderRowComponent, ReturnComponent, SelectItemWrapperComponent, SelectItemReturnWrapperComponent, TrackingDetailComponent, UpdateItemButtonComponent, ProcessReturnComponent],
  exports: [OrderRowComponent, ReturnComponent],
    imports: [
        CommonModule,
        OrdersRoutingModule,
        ListModule,
        MatButtonModule,
        NamedRouteModule,
        FormlyFormModule,
        MatCardModule,
        MatCheckboxModule,
        MatIconModule,
        IconModule,
        FlexModule,
        MatListModule,
        ButtonsModule,
        MatDialogModule,
        BreadcrumbsModule,
        FormlyModule.forChild({
            wrappers: [
                {name: 'selectItem', component: SelectItemWrapperComponent},
                {name: 'selectItem_return', component: SelectItemReturnWrapperComponent},
            ],
        }),
        SpbCommonModule,
        MatMenuModule,
        FontAwesomeModule,
        MatStepperModule,
        DetailModule,
        FlexLayoutModule,
        MatTooltipModule,
    ]
})
export class OrdersModule { }
