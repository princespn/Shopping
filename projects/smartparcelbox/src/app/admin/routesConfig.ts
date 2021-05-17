import {RoutesConfig as AccountRoutesConfig} from '@app/admin/account/routesConfig';
import {RoutesConfig as UserRoutesConfig} from '@app/admin/user/routesConfig';
import {RoutesConfig as PagesRoutesConfig} from '@app/admin/page/routesConfig';
import {RoutesConfig as OrderRoutesConfig} from '@app/admin/orders/routesConfig';
import {RoutesConfig as OrderItemSelectionRoutingConfig} from '@app/admin/order-item-selection/routesConfig';
import {RoutesConfig as ServicerequestsConfig} from '@app/admin/servicerequests/routesConfig';
import {RoutesConfig as StoreconnectionsConfig} from '@app/admin/storeconnections/routesConfig';
import {RoutesConfig as SettingsConfig} from '@app/admin/settings/routesConfig';
import {RoutesConfig as SignoutConfig} from '@app/admin/signout/routesConfig';
import {RoutesConfig as HelpfeedbackConfig} from '@app/admin/helpfeedback/routesConfig';
import {RoutesConfig as SmartParcelBoxRoutesConfig} from '@app/admin/smart-parcel-box/routesConfig';
import {RoutesConfig as FaqsRoutesConfig} from '@app/admin/faqs/routesConfig';
import {RoutesConfig as AboutUsRoutesConfig} from '@app/admin/about-us/routesConfig';

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
  order: {
    path: 'orders',
    data: {
      children: OrderRoutesConfig,
      toolBarTitle: 'My Shopping',
      meta: {
        title: 'All Orders',
        description: 'Shopping manager integrates all your shipments into a single app'
      },
    },
  },
  orderItemSelection: {
    path: 'order-item-selection',
    data: {
      children: OrderItemSelectionRoutingConfig
    },
  },
  servicerequests: {
    path: 'servicerequests',
    data: {
      children: ServicerequestsConfig,
      toolBarTitle: 'Service Requests',
      meta: {
        title: 'Service Requests',
        description: 'Shopping manager integrates all your shipments into a single app'
      }
    },
  },
  storeconnections: {
    path: 'storeconnections',
    data: {
      children: StoreconnectionsConfig,
      toolBarTitle: 'Contact Retailer',
      meta: {
        title: 'Connect Retailer',
        description: 'Shopping manager integrates all your shipments into a single app'
      }
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
  signoutrequests: {
    path: 'signout',
    data: {
      children: SignoutConfig,
      toolBarTitle: 'Sign Out'
    },
  },
  helpfeedbackrequests: {
    path: 'helpfeedback',
    data: {
      children: HelpfeedbackConfig,
      toolBarTitle: 'Help & Feedback',
      meta: {
        title: 'Help & Feedback ',
        description: 'Shopping manager integrates all your shipments into a single app'
      }
    },
  },
  faqs: {
    path: 'faqs',
    data: {
      children: FaqsRoutesConfig,
      meta: {
        title: 'Frequently Asked Questions ',
        description: 'Shopping manager integrates all your shipments into a single app'
      }
    },
  },
  smartParcelBox: {
    path: 'smart-parcel-box',
    data: {
      children: SmartParcelBoxRoutesConfig,
      toolBarTitle: 'Smart Parcel Box',
      meta: {
        title: 'Smart Parcel Box ',
        description: 'Shopping manager integrates all your shipments into a single app'
      }
    },
  },
  pages: {
    path: 'pages',
    data: {
      children: PagesRoutesConfig,
      toolBarTitle: 'Help & Feedback',
      meta: {
        title: 'Help & Feedback',
        description: 'Shopping manager integrates all your shipments into a single app'
      }
    },
  },
  adminAboutUs: {
    path: 'about-us',
    data: {
      children: AboutUsRoutesConfig,
      toolBarTitle: 'About us',
    },
  }
};
