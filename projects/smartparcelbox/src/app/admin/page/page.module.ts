import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {MatButtonModule} from '@angular/material/button';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ContainerModule} from '@vexs/directives/container/container.module';


@NgModule({
  declarations: [ListComponent, EditComponent],
    imports: [
        CommonModule,
        PageRoutingModule,
        MatButtonModule,
        ListModule,
        NamedRouteModule,
        FormlyFormModule,
        ContainerModule
    ]
})
export class PageModule { }
