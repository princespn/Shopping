import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutesConfig} from '@app/guest/routesConfig';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Welcome to the Shopping Manager',
        description: 'The smartest way to stay on top of all your online shopping.\n' +
          'Brought to you by the Smart Parcel Box '
      }
    }
  },
  {
    ...RoutesConfig.account,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    ...RoutesConfig.page_detail,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    ...RoutesConfig.order_tracking,
    loadChildren: () => import('./order-tracking/order-tracking.module').then(m => m.OrderTrackingModule),
  },
  {
    ...RoutesConfig.register_smart_parcel_box,
    loadChildren: () => import('./register-smart-parcel-box/register-smart-parcel-box.module').then(m => m.RegisterSmartParcelBoxModule),
  },
  {
    ...RoutesConfig.buy_smart_parcel_box,
    loadChildren: () => import('./buy-smart-parcel-box/buy-smart-parcel-box.module').then(m => m.BuySmartParcelBoxModule),
  },

  {
    ...RoutesConfig.my_shopping,
    loadChildren: () => import('./my-shopping/my-shopping.module').then(m => m.MyShoppingModule),
  },
  {
    ...RoutesConfig.return_order,
    loadChildren: () => import('./return-order/return-order.module').then(m => m.ReturnOrderModule),
  },
  {
    ...RoutesConfig.contact_us,
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
  },
  {
    ...RoutesConfig.supported_couriers,
    loadChildren: () => import('./supported-couriers/supported-couriers.module').then(m => m.SupportedCouriersModule),
  },
  {
    ...RoutesConfig.linked_retailers,
    loadChildren: () => import('./linked-retailers/linked-retailers.module').then(m => m.LinkedRetailersModule),
  },
  {
    ...RoutesConfig.security,
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule),
  },
  {
    ...RoutesConfig.front_faq,
    loadChildren: () => import('./faqs/faqs.module').then(m => m.FaqsModule),
  },
  {
    ...RoutesConfig.front_about_us,
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule),
  },
  {
    ...RoutesConfig.connect_retailer_programs,
    loadChildren: () => import('./connect-retailer-program/connect-retailer-program.module').then(m => m.ConnectRetailerProgramModule),
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
