import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { EditComponent } from './edit/edit.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {SharedModule} from '@app/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ActivityComponent } from './activity/activity.component';
import { ChangeEmailUserNameComponent } from './change-email-user-name/change-email-user-name.component';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';
import {DetailModule} from '@gomcodoctor/gomco-common/detail/detail.module';


@NgModule({
  declarations: [EditComponent, ChangePasswordComponent, ActivityComponent, ChangeEmailUserNameComponent],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FlexLayoutModule,
        ContainerModule,
        SharedModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormlyFormModule,
        MatTabsModule,
        MatChipsModule,
        SpbCommonModule,
        DetailModule
    ]
})
export class AccountModule { }
