import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRegistrationRoutingModule } from './confirm-registration-routing.module';
import { ConfirmRegistrationComponent } from './confirm-registration.component';
import {LoadingModule} from '@gomcodoctor/gomco-common/loading/loading.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ConfirmRegistrationComponent],
    imports: [
        CommonModule,
        ConfirmRegistrationRoutingModule,
        LoadingModule,
        MatStepperModule,
        MatIconModule,
        FormlyFormModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class ConfirmRegistrationModule { }
