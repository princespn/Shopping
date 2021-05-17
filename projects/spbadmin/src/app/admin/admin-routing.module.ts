import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutesConfig as AdminRoutesConfig} from '@app/admin/routesConfig';

const routes: Routes = [
  {
    ...AdminRoutesConfig.account,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    ...AdminRoutesConfig.user,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    ...AdminRoutesConfig.user_group,
    loadChildren: () => import('./user-group/user-group.module').then(m => m.UserGroupModule),
  },

  {
    ...AdminRoutesConfig.channelProducts,
    loadChildren: () => import('./channel-product/channel-product.module').then(m => m.ChannelProductModule),
  },
  {
    ...AdminRoutesConfig.faqs,
    loadChildren: () => import('./faqs/faqs.module').then(m => m.FaqsModule),
  },
  {
    ...AdminRoutesConfig.pages,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    ...AdminRoutesConfig.channels,
    loadChildren: () => import('./channel/channel.module').then(m => m.ChannelModule),
  },
  {
    ...AdminRoutesConfig.countries,
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule),
  },
  {
  ...AdminRoutesConfig.couriers,
    loadChildren: () => import('./couriers/couriers.module').then(m => m.CouriersModule),
  },
  {
    ...AdminRoutesConfig.email_templates,
    loadChildren: () => import('./email-templates/email-templates.module').then(m => m.EmailTemplatesModule),
  },
  {
    ...AdminRoutesConfig.layout_templates,
    loadChildren: () => import('./layout-templates/layout-templates.module').then(m => m.LayoutTemplatesModule),
  },
  {
    ...AdminRoutesConfig.return_process,
    loadChildren: () => import('./return-process/return-process.module').then(m => m.ReturnProcessModule),
  },
  {
    ...AdminRoutesConfig.order,
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  },
  {
    ...AdminRoutesConfig.settingsrequests,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    ...AdminRoutesConfig.signoutrequests,
    loadChildren: () => import('./signout/signout.module').then(m => m.SignoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
