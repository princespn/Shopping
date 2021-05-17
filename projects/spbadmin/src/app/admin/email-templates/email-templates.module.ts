import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatCardModule} from '@angular/material/card';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ListComponent} from '@app/admin/email-templates/list/list.component';
import {EmailTemplatesRoutingModule} from '@app/admin/email-templates/email-templates-routing.module';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    EmailTemplatesRoutingModule,
    FlexLayoutModule,
    MatCheckboxModule,
    NamedRouteModule,
    ListModule,
    MatCardModule,
    FormlyFormModule,
    ButtonsModule
  ]
})
export class EmailTemplatesModule { }
