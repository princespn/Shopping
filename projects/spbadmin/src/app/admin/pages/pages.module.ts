import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {MatCardModule} from '@angular/material/card';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {PagesRoutingModule} from '@app/admin/pages/pages-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {ButtonsModule} from '@gomcodoctor/admin/buttons/buttons.module';




@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FlexLayoutModule,
    MatCheckboxModule,
    NamedRouteModule,
    ListModule,
    MatCardModule,
    FormlyFormModule,
    MatIconModule,
    ButtonsModule
  ]
})
export class PagesModule { }
