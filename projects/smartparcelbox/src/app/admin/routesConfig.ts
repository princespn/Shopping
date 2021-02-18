import {RoutesConfig as AccountRoutesConfig} from '@app/admin/account/routesConfig';
import {RoutesConfig as UserRoutesConfig} from '@app/admin/user/routesConfig';
import {RoutesConfig as UserGroupRoutesConfig} from '@app/admin/user-group/routesConfig';
import {RoutesConfig as PagesRoutesConfig} from '@app/admin/page/routesConfig';
import {RoutesConfig as ChannelsRoutesConfig} from '@app/admin/channel/routesConfig';
import {RoutesConfig as ChannelProductsRoutesConfig} from '@app/admin/channel-product/routesConfig';
import {RoutesConfig as ChannelSettingsRoutesConfig} from '@app/admin/channel-setting/routesConfig';
import {RoutesConfig as SupplierSettingsRoutesConfig} from '@app/admin/supplier-setting/routesConfig';
import {RoutesConfig as SupplierProductsRoutesConfig} from '@app/admin/supplier-product/routesConfig';
import {RoutesConfig as SupplierRoutesConfig} from '@app/admin/supplier/routesConfig';
import {RoutesConfig as ProductsRoutesConfig} from '@app/admin/product/routesConfig';
import {RoutesConfig as FeedsRoutesConfig} from '@app/admin/feed/routesConfig';
import {RoutesConfig as CronLogRoutesConfig} from '@app/admin/cron-log/routesConfig';
import {RoutesConfig as ChannelRequestLogRoutesConfig} from '@app/admin/channel-request-log/routesConfig';

export const RoutesConfig = {
  dashboard: {
    path: 'dash',
    data: {
      // children: InventoryRoutesConfig
    },
  },
  account: {
    path: 'account',
    data: {
      children: AccountRoutesConfig
    },
  },
  user: {
    path: 'users',
    data: {
      children: UserRoutesConfig
    },
  },
  user_group: {
    path: 'userGroups',
    data: {
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
      children: ProductsRoutesConfig
    },
  },
  pages: {
    path: 'pages',
    data: {
      children: PagesRoutesConfig
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
  }
};
