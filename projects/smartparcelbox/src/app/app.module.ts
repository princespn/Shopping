import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VexModule} from '@vexs/vex.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CustomLayoutModule} from './custom-layout/custom-layout.module';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {ErrorHttpInterceptor} from '@gomcodoctor/services/interceptor/ErrorHttp.interceptor';
import {AccountService} from '@gomcodoctor/services/account/account.service';

import {Router} from '@angular/router';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {BreadcrumbsModule} from '@vexs/components/breadcrumbs/breadcrumbs.module';
import {SecondaryToolbarModule} from '@vexs/components/secondary-toolbar/secondary-toolbar.module';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {SharedModule} from '@app/shared.module';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {ContentLoaderModule} from '@netbasal/ngx-content-loader';
import {AuthLoader, AuthModule, AuthService} from '@gomcodoctor/services/auth';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {jwtOptionsFactory} from '@gomcodoctor/services/auth/jwtOptionsFactory';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {fieldMatchValidator} from '@gomcodoctor/formly/fieldMatchValidator';
import {
    validateMax,
    validateMaxLength,
    validateMin,
    validateMinLength,
    validateRequired
} from '@gomcodoctor/formly/validationMessages';
import {PrefixSuffixWrapperComponent} from '@gomcodoctor/formly/prefix-suffix-wrapper/prefix-suffix.wrapper.component';
import {PasswordModule} from '@gomcodoctor/formly/password-field/password.module';
import {prefixSuffixExtension} from '@gomcodoctor/formly/prefix-suffix-wrapper/prefix-suffix.extension';
import {FormlyChipsModule} from '@gomcodoctor/formly/formly-chips-autocomplete/formly-chips.module';
import {FormlyTypeheadModule} from '@gomcodoctor/formly/typehead/formly-typehead.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {BaseService} from '@gomcodoctor/services/base.service';
import {APP_NAV_CONFIG, NavigationItemProviderService} from '@gomcodoctor/services/route/navigation-item/navigation-item-provider.service';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {BackendInterceptor} from '@gomcodoctor/services/interceptor/BackendHttpInterceptor';
import {RepeatSectionTypeModule} from '@gomcodoctor/formly/repeat-section-type/repeat-section-type.module';
import {FileUploadModule} from '@gomcodoctor/formly/file-upload/file-upload.module';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormlyMatToggleModule} from '@ngx-formly/material/toggle';
import {FormlyTabsModule} from '@gomcodoctor/formly/tabs/tabs.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {GeolocationService} from '@gomcodoctor/services/geolocation/geolocation.service';
import {AgmCoreModule} from '@agm/core';
import {QuillTypeModule} from '@gomcodoctor/formly/quill/quill.type.module';
import {QuillModule} from 'ngx-quill';
import {FormlyRatingModule} from '@gomcodoctor/formly/rating/formly-rating.module';
import {RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, RecaptchaSettings} from 'ng-recaptcha';
import {GoogleMapLocationModule} from '@gomcodoctor/formly/google-map-location/google-map-location.module';
import {BrowserModule} from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {authFactory} from '@gomcodoctor/services/auth/authFactory';
import {CookieModule} from 'ngx-cookie';
import {MetaLoader, MetaModule} from '@ngx-meta/core';
import {metaFactory} from '@gomcodoctor/services/meta.factory';
import {SchemaService} from '@gomcodoctor/services/schema/schema.service';
import {ShareButtonsConfig, SharerMethod} from 'ngx-sharebuttons';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { IonicModule } from '@ionic/angular';

import {LayoutComponent as AuthLayoutComponent} from '@app/guest/auth/layout/layout.component';
import {AdminItems} from '@app/_helper/admin-navigation-items';
import {GuestItems} from '@app/_helper/guest-navigation-items';
import {MatConfirmDialogModule} from '@gomcodoctor/gomco-common/mat-confirm-dialog/mat-confirm-dialog.module';
import {ConfirmationDialogService} from '@gomcodoctor/services/confirmation-dialog/confirmation-dialog.service';

const customConfig: ShareButtonsConfig = {
    // include: ['facebook', 'twitter', 'google'],
    // exclude: ['tumblr', 'stumble', 'vk'],
    theme: 'circles-dark',
    gaTracking: true,
    twitterAccount: 'twitterUsername',
    sharerMethod: SharerMethod.Window,
    sharerTarget: '_blank',
};

@NgModule({
    declarations: [AppComponent, PrefixSuffixWrapperComponent, AuthLayoutComponent],
    entryComponents: [],
    imports: [
        SharedModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        // Vex
        VexModule,
        CustomLayoutModule,
        FormlyModule.forRoot({
            validationMessages: [
                {name: 'required', message: validateRequired},
                {name: 'minlength', message: validateMinLength},
                {name: 'maxlength', message: validateMaxLength},
                {name: 'min', message: validateMin},
                {name: 'max', message: validateMax},
            ],
            validators: [
                {name: 'fieldMatch', validation: fieldMatchValidator},
            ],
            types: [
                // {name: 'visiblePassword', component: PasswordTypeComponent, wrappers: ['form-field']},
            ],
            wrappers: [
                {name: 'prefixSuffix', component: PrefixSuffixWrapperComponent},
            ],
            extensions: [
                {name: 'prefixSuffix', extension: {onPopulate: prefixSuffixExtension}},
            ],
            extras: {lazyRender: true}
        }),
        FormlyMaterialModule,
        FormlyMatToggleModule,
        PasswordModule,
        FormlyTypeheadModule,
        FormlyChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatSnackBarModule,
        IconModule,
        BreadcrumbsModule,
        SecondaryToolbarModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatRadioModule,
        ContainerModule,
        ContentLoaderModule,
        RepeatSectionTypeModule,
        QuillModule.forRoot(),
        AuthModule.forRoot({
            provide: AuthLoader,
            useFactory: (authFactory),
            deps: ['loginDefaultRedirect']
        }),
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory,
                deps: [AuthService]
            },
            config: {
                skipWhenExpired: true
            }
        }),
        ReactiveFormsModule,
        FileUploadModule,
        FilePickerModule,
        MatCardModule,
        FlexLayoutModule,
        FormlyTabsModule,
        FormlyFormModule,
        AgmCoreModule.forRoot({
            apiKey: 'ddddddd',
            libraries: ['places']
        }),
        QuillTypeModule,
        FormlyRatingModule,
        GoogleMapLocationModule,
        TransferHttpCacheModule,
        CookieModule.forRoot(),
        MetaModule.forRoot({
            provide: MetaLoader,
            useFactory: (metaFactory)
        }),
        ShareButtonsModule.withConfig(customConfig),
        ShareIconsModule,
        IonicModule.forRoot(),
        MatConfirmDialogModule
    ],
    providers: [NamedRoutesService, AccountService, BaseService,
      NavigationItemProviderService, GeolocationService, SchemaService, ConfirmationDialogService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true },
        { provide: RECAPTCHA_V3_SITE_KEY, useValue: 'eeeee' },
        { provide: APP_NAV_CONFIG, useValue: {GuestItems, AdminItems} },
        {provide: RECAPTCHA_SETTINGS, useValue: { siteKey: 'eeeee' } as RecaptchaSettings},
        { provide: 'loginDefaultRedirect', useValue: 'admin' }
    ],
    // bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router, namedRoutesService: NamedRoutesService) {
        namedRoutesService.setRoutes(router.config);
    }
}
