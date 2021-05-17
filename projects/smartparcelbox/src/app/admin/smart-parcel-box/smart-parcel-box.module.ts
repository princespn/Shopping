import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatButtonModule} from '@angular/material/button';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {SmartParcelBoxRoutingModule} from './smart-parcel-box-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {LoadingModule} from '@gomcodoctor/gomco-common/loading/loading.module';
import { EditComponent } from './edit/edit.component';
import {MatMenuModule} from '@angular/material/menu';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';
import {DetailModule} from "@gomcodoctor/gomco-common/detail/detail.module";

@NgModule({
  declarations: [DetailComponent, EditComponent],
    imports: [
        CommonModule,
        SmartParcelBoxRoutingModule,
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
        LoadingModule,
        MatMenuModule,
        ReactiveFormsModule,
        FormlyModule,
        CommonModule,
        SpbCommonModule,
        ButtonsModule,
        DetailModule
    ]
})
export class SmartParcelBoxModule { }
