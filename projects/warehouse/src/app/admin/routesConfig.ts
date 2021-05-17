import {RoutesConfig as AccountRoutesConfig} from '@app/admin/account/routesConfig';
import {RoutesConfig as UserRoutesConfig} from '@app/admin/user/routesConfig';
import {RoutesConfig as UserGroupRoutesConfig} from '@app/admin/user-group/routesConfig';
import {RoutesConfig as ChannelsRoutesConfig} from '@app/admin/channel/routesConfig';
import {RoutesConfig as ChannelProductsRoutesConfig} from '@app/admin/channel-product/routesConfig';
import {RoutesConfig as ChannelSettingsRoutesConfig} from '@app/admin/channel-setting/routesConfig';
import {RoutesConfig as SupplierSettingsRoutesConfig} from '@app/admin/supplier-setting/routesConfig';
import {RoutesConfig as SupplierProductsRoutesConfig} from '@app/admin/supplier-product/routesConfig';
import {RoutesConfig as SupplierRoutesConfig} from '@app/admin/supplier/routesConfig';
import {RoutesConfig as ProductsRoutesConfig} from '@app/admin/product/routesConfig';
import {RoutesConfig as ProductsStockLogRoutesConfig} from '@app/admin/product-stock-log/routesConfig';
import {RoutesConfig as SupplierOrdersRoutesConfig} from '@app/admin/supplier-orders/routesConfig';
import {RoutesConfig as SupplierOrdersItemsRoutesConfig} from '@app/admin/supplier-orders-item/routesConfig';
import {RoutesConfig as SupplierOrderItemReceiptsRoutesConfig} from '@app/admin/supplier-order-item-receipts/routesConfig';
import {RoutesConfig as ContainerConfig} from '@app/admin/container/routesConfig';
import {RoutesConfig as ContainerItemsConfig} from '@app/admin/container-items/routesConfig';
import {RoutesConfig as SignoutConfig} from '@app/admin/signout/routesConfig';
import {RoutesConfig as FeedsRoutesConfig} from '@app/admin/feed/routesConfig';
import {RoutesConfig as CronLogRoutesConfig} from '@app/admin/cron-log/routesConfig';
import {RoutesConfig as ChannelRequestLogRoutesConfig} from '@app/admin/channel-request-log/routesConfig';
import {RoutesConfig as ProductStockLogRoutesConfig} from '@app/admin/product-stock-log/routesConfig';
import {RoutesConfig as SettingsConfig} from '../../../../smartparcelbox/src/app/admin/settings/routesConfig';

export const RoutesConfig = {
  account: {
    path: 'account',
    data: {
      children: AccountRoutesConfig
    },
  },
  user: {
    path: 'users',
    data: {
      toolBarTitle: 'Users',
      children: UserRoutesConfig
    },
  },
  user_group: {
    path: 'userGroups',
    data: {
      toolBarTitle: 'User Groups',
      children: UserGroupRoutesConfig
    },
  },
  channels: {
    path: 'channels',
    data: {
      children: ChannelsRoutesConfig
    },
  },
  channelProducts: {
    path: 'channel-products',
    data: {
      children: ChannelProductsRoutesConfig
    },
  },
  channelSettings: {
    path: 'channel-settings',
    data: {
      children: ChannelSettingsRoutesConfig
    },
  },
  supplierSettings: {
    path: 'supplier-settings',
    data: {
      children: SupplierSettingsRoutesConfig
    },
  },
  supplierProducts: {
    path: 'supplier-products',
    data: {
      children: SupplierProductsRoutesConfig
    },
  },
  supplier: {
    path: 'suppliers',
    data: {
      children: SupplierRoutesConfig
    },
  },
  products: {
    path: 'products',
    data: {
      toolBarTitle: 'Products',
      children: ProductsRoutesConfig
    },
  },
  productsStockLog: {
    path: 'productstocklogs',
    data: {
      toolBarTitle: 'Product Stock Logs',
      children: ProductsStockLogRoutesConfig
    },
  },
  supplierOrder: {
    path: 'supplier_orders',
    data: {
      toolBarTitle: 'Purchase Orders',
      children: SupplierOrdersRoutesConfig
    },
  },
  supplierOrderItems: {
    path: 'supplier_orders_items',
    data: {
      toolBarTitle: 'Purchase Order Items',
      children: SupplierOrdersItemsRoutesConfig
    },
  },
  supplierOrderItemReceipts: {
    path: 'supplier_order_item_receipts',
    data: {
      toolBarTitle: 'PO Products Delivered',
      children: SupplierOrderItemReceiptsRoutesConfig
    },
  },
  container: {
    path: 'container',
    data: {
      toolBarTitle: 'Containers',
      children: ContainerConfig
    },
  }, containerItems: {
    path: 'container-items',
    data: {
      children: ContainerItemsConfig
    },
  },
  signoutrequests: {
    path: 'signout',
    data: {
      toolBarTitle: 'Sign Out',
      children: SignoutConfig
    },
  },
  cronLogs: {
    path: 'cron-logs',
    data: {
      children: CronLogRoutesConfig
    },
  },
  feeds: {
    path: 'feeds',
    data: {
      children: FeedsRoutesConfig
    },
  },
  channelRequestLogs: {
    path: 'channel-request-logs',
    data: {
      children: ChannelRequestLogRoutesConfig
    },
  },
  productStockLogRoutesConfig: {
    path: 'productstocklogs',
    data: {
      children: ProductStockLogRoutesConfig
    },
  },
  settingsrequests: {
    path: 'settings',
    data: {
      children: SettingsConfig,
      toolBarTitle: 'Settings',
      meta: {
        title: 'Account Setting',
        description: 'Shopping manager integrates all your shipments into a single app'
      }
    },
  },
};
