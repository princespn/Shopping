import {RoutesConfig as AccountRoutesConfig} from '@app/admin/account/routesConfig';
import {RoutesConfig as UserRoutesConfig} from '@app/admin/user/routesConfig';
import {RoutesConfig as UserGroupRoutesConfig} from '@app/admin/user-group/routesConfig';
import {RoutesConfig as ChannelsRoutesConfig} from '@app/admin/channel/routesConfig';
import {RoutesConfig as ChannelProductsRoutesConfig} from '@app/admin/channel-product/routesConfig';
import {RoutesConfig as ChannelSettingsRoutesConfig} from '@app/admin/channel-setting/routesConfig';
import {RoutesConfig as OrderRoutesConfig} from '@app/admin/orders/routesConfig';
import {RoutesConfig as SettingsConfig} from '@app/admin/settings/routesConfig';
import {RoutesConfig as FaqsRoutesConfig} from '@app/admin/faqs/routesConfig';
import {RoutesConfig as PagesRoutesConfig} from '@app/admin/pages/routesConfig';
import {RoutesConfig as SignoutConfig} from '@app/admin/signout/routesConfig';
import {RoutesConfig as ChannelRequestLogRoutesConfig} from '@app/admin/channel-request-log/routesConfig';
import {RoutesConfig as CountriesRoutesConfig} from '@app/admin/countries/routesConfig';
import {RoutesConfig as CouriersRoutesConfig} from '@app/admin/couriers/routesConfig';
import {RoutesConfig as EmailTemplatesRoutesConfig} from '@app/admin/email-templates/routesConfig';
import {RoutesConfig as LayoutTemplatesRoutesConfig} from '@app/admin/layout-templates/routesConfig';
import {RoutesConfig as ReturnProcessRoutesConfig} from '@app/admin/return-process/routesConfig';

export const RoutesConfig = {
  dashboard: {
    path: 'dash',
    data: {
      children: OrderRoutesConfig
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
  return_process: {
    path: 'return_process',
    data: {
      children: ReturnProcessRoutesConfig
    },
  },
  order: {
    path: 'orders',
    data: {
      children: OrderRoutesConfig
    },
  },
  settingsrequests: {
    path: 'settings',
    data: {
      children: SettingsConfig
    },
  },
  signoutrequests: {
    path: 'signout',
    data: {
      children: SignoutConfig
    },
  },
  channelRequestLogs: {
    path: 'channel-request-logs',
    data: {
      children: ChannelRequestLogRoutesConfig
    },
  },
  faqs: {
    path: 'faqs',
    data: {
      children: FaqsRoutesConfig
    },
  },
  channels: {
    path: 'channels',
    data: {
      children: ChannelsRoutesConfig
    },
  },
  couriers: {
    path: 'couriers',
    data: {
      children: CouriersRoutesConfig
    },
  },
  email_templates: {
    path: 'email_templates',
    data: {
      children: EmailTemplatesRoutesConfig
    },
  },
  layout_templates: {
    path: 'layout_templates',
    data: {
      children: LayoutTemplatesRoutesConfig
    },
  },
  countries: {
    path: 'countries',
    data: {
      children: CountriesRoutesConfig
    },
  },
  pages: {
    path: 'pages',
    data: {
      children: PagesRoutesConfig
    },
  },
};
