import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    ...AdminRoutesConfig.settingsrequests,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
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
      ...AdminRoutesConfig.products,
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    },
    {
      ...AdminRoutesConfig.productsStockLog,
      loadChildren: () => import('./product-stock-log/product-stock-log.module').then(m => m.ProductStockLogModule),
    },
    {
      ...AdminRoutesConfig.supplierOrder,
      loadChildren: () => import('./supplier-orders/supplier-orders.module').then(m => m.SupplierOrdersModule),
    },
    {
      ...AdminRoutesConfig.supplierOrderItems,
      loadChildren: () => import('./supplier-orders-item/supplier-orders-item.module').then(m => m.SupplierOrdersItemModule),
    },
    {
      ...AdminRoutesConfig.supplierOrderItemReceipts,
      // tslint:disable-next-line:max-line-length
      loadChildren: () => import('./supplier-order-item-receipts/supplier-order-item-receipts.module').then(m => m.SupplierOrderItemReceiptsModule),
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
      ...AdminRoutesConfig.container,
      loadChildren: () => import('./container/container.module').then(m => m.ContainerModule),
    },
  {
      ...AdminRoutesConfig.containerItems,
      loadChildren: () => import('./container-items/container-items.module').then(m => m.ContainerItemsModule),
    },
  {
      ...AdminRoutesConfig.signoutrequests,
      loadChildren: () => import('./signout/signout.module').then(m => m.SignoutModule),
    },
    {
      ...AdminRoutesConfig.productStockLogRoutesConfig,
      loadChildren: () => import('./product-stock-log/product-stock-log.module').then(m => m.ProductStockLogModule),
    },
    {
      ...AdminRoutesConfig.products,
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
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
