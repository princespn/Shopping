import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
// import { AuthModule} from '@gomcodoctor/services/auth';
// import {authFactory} from '@gomcodoctor/services/auth/authFactory';
// import {REQUEST, RESPONSE} from '@nguniversal/express-engine/tokens';
import {CookieBackendModule} from 'ngx-cookie-backend';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    CookieBackendModule.forRoot(),
    ServerTransferStateModule,
    FlexLayoutServerModule,
    // AuthModule.forServer(),
  ],
  bootstrap: [AppComponent],
  // providers: [{ provide: 'REQUEST', useValue: REQUEST }, { provide: 'RESPONSE', useValue: RESPONSE }]
})
export class AppServerModule {}
