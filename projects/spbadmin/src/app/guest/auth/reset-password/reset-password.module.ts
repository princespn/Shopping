import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import {FormlyFormModule} from "@gomcodoctor/gomco-common/formly-form/formly-form.module";


@NgModule({
  declarations: [ResetPasswordComponent],
    imports: [
        CommonModule,
        ResetPasswordRoutingModule,
        FormlyFormModule
    ]
})
export class ResetPasswordModule { }
