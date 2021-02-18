import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig as AdminRoutesConfig} from '@app/admin/routesConfig';

const routes: Routes = [
    // {
    //     ...AdminRoutesConfig.dashboard,
    //     loadChildren: () => import('./../pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module').then(m => m.DashboardAnalyticsRoutingModule),
    // },
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
      ...AdminRoutesConfig.channels,
      loadChildren: () => import('./channel/channel.module').then(m => m.ChannelModule),
    },
    {
      ...AdminRoutesConfig.channelProducts,
      loadChildren: () => import('./channel-product/channel-product.module').then(m => m.ChannelProductModule),
    },
    {
      ...AdminRoutesConfig.channelSettings,
      loadChildren: () => import('./channel-setting/channel-setting.module').then(m => m.ChannelSettingModule),
    },
    {
      ...AdminRoutesConfig.supplierSettings,
      loadChildren: () => import('./supplier-setting/supplier-setting.module').then(m => m.SupplierSettingModule),
    },
    {
      ...AdminRoutesConfig.supplier,
      loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule),
    },
    {
      ...AdminRoutesConfig.supplierProducts,
      loadChildren: () => import('./supplier-product/supplier-product.module').then(m => m.SupplierProductModule),
    },
    {
      ...AdminRoutesConfig.products,
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    },
    {
        ...AdminRoutesConfig.pages,
        loadChildren: () => import('./page/page.module').then(m => m.PageModule),
    },
    {
      ...AdminRoutesConfig.channelRequestLogs,
      loadChildren: () => import('./channel-request-log/channel-request-log.module').then(m => m.ChannelRequestLogModule),
    },
    {
      ...AdminRoutesConfig.cronLogs,
      loadChildren: () => import('./cron-log/cron-log.module').then(m => m.CronLogModule),
    },
    {
      ...AdminRoutesConfig.feeds,
      loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule),
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
