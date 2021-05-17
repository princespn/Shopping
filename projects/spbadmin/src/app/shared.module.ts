import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ContainerModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
  ]
})
export class SharedModule {

}
