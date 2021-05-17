import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {ContainerModule} from '@vexs/directives/container/container.module';
import {RelativeDateTimeModule} from '@vexs/pipes/relative-date-time/relative-date-time.module';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@visurel/iconify-angular';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '@app/shared.module';
import {CustomLayoutModule} from '@app/custom-layout/custom-layout.module';
import {LayoutComponent} from '@app/guest/layout/layout.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ContentLoaderModule} from '@netbasal/ngx-content-loader';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {GenericDoseChipsModule} from '@gomcodoctor/gomco-common/generic-dose-chips/generic-dose-chips.module';
import {AgmCoreModule} from '@agm/core';
import {CommentModule} from '@gomcodoctor/gomco-common/comment/comment.module';
import {MatTabsModule} from '@angular/material/tabs';
import {PaginationControlsModule} from '@gomcodoctor/gomco-common/pagination-controls/pagination-controls.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {MatStepperModule} from '@angular/material/stepper';
import {NgSelectModule} from '@ng-select/ng-select';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {LoadingModule} from '@gomcodoctor/gomco-common/loading/loading.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ShareModule} from 'ngx-sharebuttons';
import {SocialMediaModule} from '@gomcodoctor/gomco-common/social-media/social-media.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {GoogleMapLocationModule} from '@gomcodoctor/gomco-common/google-map-location/google-map-location.module';
import {BarRatingModule} from 'ngx-bar-rating';
import {GoogleMapSelectLocationModule} from '@gomcodoctor/gomco-common/google-map-select-location/google-map-select-location.module';
import {GoogleMapDirectionModule} from '@gomcodoctor/gomco-common/google-map-direction/google-map-direction.module';
import {SpbCommonModule} from '@app/spb-common/spb-common.module';
import { ResendEmailComponent } from './auth/resend-email/resend-email.component';



@NgModule({
    declarations: [ LayoutComponent, ResendEmailComponent ],
    imports: [
        SharedModule,
        CommonModule,
        GuestRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatGridListModule,
        MatButtonModule,
        MatExpansionModule,
        ContainerModule,
        RelativeDateTimeModule,
        ReactiveFormsModule,
        IconModule,
        MatChipsModule,
        MatListModule,
        MatIconModule,
        CustomLayoutModule,
        ContentLoaderModule,
        NgxPaginationModule,
        NamedRouteModule,
        GenericDoseChipsModule,
        AgmCoreModule,
        CommentModule,
        MatTabsModule,
        PaginationControlsModule,
        NgxGalleryModule,
        MatStepperModule,
        NgSelectModule,
        MatSelectModule,
        MatMenuModule,
        LoadingModule,
        FontAwesomeModule,
        ShareModule,
        SocialMediaModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatRadioModule,
        GoogleMapLocationModule,
        GoogleMapSelectLocationModule,
        GoogleMapDirectionModule,
        BarRatingModule,
        SpbCommonModule,
    ]
})
export class GuestModule { }
