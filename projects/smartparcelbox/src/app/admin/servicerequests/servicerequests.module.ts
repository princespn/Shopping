import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatButtonModule} from '@angular/material/button';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ServicerequestsRoutingModule} from './servicerequests-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {DetailComponent} from '@app/admin/servicerequests/detail/detail.component';
import {OrderRowComponent} from '@app/admin/servicerequests/order-row/order-row.component';
import {ScrollbarModule} from '@vex/components/scrollbar/scrollbar.module';
import {MessageRowComponent} from '@app/admin/servicerequests/message-row/message-row.component';
import {ImagesRowComponent} from '@app/admin/servicerequests/images-row/images-row.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';
import {UploadComponent} from '@app/admin/servicerequests/detail/upload/upload.component';
import {DetailModule} from "@gomcodoctor/gomco-common/detail/detail.module";

@NgModule({
  declarations: [ListComponent, DetailComponent, OrderRowComponent, MessageRowComponent, ImagesRowComponent, UploadComponent],
  exports: [
    UploadComponent
  ],
    imports: [
        CommonModule,
        ServicerequestsRoutingModule,
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
        ScrollbarModule,
        ReactiveFormsModule,
        FormlyModule,
        ButtonsModule,
        DetailModule
    ]
})
export class OrdersModule { }
