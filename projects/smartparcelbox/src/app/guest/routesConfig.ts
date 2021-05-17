import {RoutesConfig as AccountRoutesConfig} from '@app/guest/account/routesConfig';
import {RoutesConfig as PagesRoutesConfig} from '@app/guest/pages/routesConfig';
import {RoutesConfig as OrderTrackingRoutesConfig} from '@app/guest/order-tracking/routesConfig';
import {RoutesConfig as RegisterSmartParcelBoxRoutesConfig} from '@app/guest/register-smart-parcel-box/routesConfig';
import {RoutesConfig as BuySmartParcelBoxRoutesConfig} from '@app/guest/buy-smart-parcel-box/routesConfig';
import {RoutesConfig as LinkedRetailersRoutesConfig} from '@app/guest/linked-retailers/routesConfig';
import {RoutesConfig as MyShoppingRoutesConfig} from '@app/guest/my-shopping/routesConfig';
import {RoutesConfig as ReturnOrderRoutesConfig} from '@app/guest/return-order/routesConfig';
import {RoutesConfig as ContactUsRoutesConfig} from '@app/guest/contact-us/routesConfig';
import {RoutesConfig as SupportedCouriersRoutesConfig} from '@app/guest/supported-couriers/routesConfig';
import {RoutesConfig as SecurityRoutesConfig} from '@app/guest/security/routesConfig';
import {RoutesConfig as FaqsRoutesConfig} from '@app/guest/faqs/routesConfig';
import {RoutesConfig as AboutUsRoutesConfig} from '@app/guest/about-us/routesConfig';
import {RoutesConfig as ConnectRetailerProgramRoutesConfig} from '@app/guest/connect-retailer-program/routesConfig';

export const RoutesConfig = {
  account: {
    path: 'account',
    data: {
      children: AccountRoutesConfig
    },
  },
  page_detail: {
    path: 'pages',
    data: {
      children: PagesRoutesConfig
    },
  },
  order_tracking: {
    path: 'order-tracking',
    data: {
      children: OrderTrackingRoutesConfig,
      meta: {
        title: 'Order Tracking'
      }
    },
  },
  register_smart_parcel_box: {
    path: 'register-smart-parcel-box',
    data: {
      children: RegisterSmartParcelBoxRoutesConfig,
      meta: {
        title: 'Register Smart Parcel Box'
      }
    },
  },
  buy_smart_parcel_box: {
    path: 'buy-smart-parcel-box',
    data: {
      children: BuySmartParcelBoxRoutesConfig,
      meta: {
        title: 'Buy Smart Parcel Box'
      }
    },
  },
  my_shopping: {
    path: 'my-shopping',
    data: {
      children: MyShoppingRoutesConfig,
      meta: {
        title: 'My Shopping'
      }
    },
  },
  return_order: {
    path: 'return-order',
    data: {
      children: ReturnOrderRoutesConfig,
      meta: {
        title: 'Return Order'
      }
    },
  },
  supported_couriers: {
    path: 'supported-couriers',
    data: {
      children: SupportedCouriersRoutesConfig,
      meta: {
        title: 'Supported Couriers'
      }
    },
  },
  linked_retailers: {
    path: 'linked-retailers',
    data: {
      children: LinkedRetailersRoutesConfig,
      meta: {
        title: 'Linked Retailers'
      }
    },
  },
  contact_us: {
    path: 'contact-us',
    data: {
      children: ContactUsRoutesConfig,
      meta: {
        title: 'Contact Us'
      }
    },
  },
  security: {
    path: 'security',
    data: {
      children: SecurityRoutesConfig,
      meta: {
        title: 'Security'
      }
    },
  },
  front_faq: {
    path: 'faqs',
    data: {
      children: FaqsRoutesConfig,
      meta: {
        title: 'Frequently Asked Question'
      }
    },
  },
  front_about_us: {
    path: 'about-us',
    data: {
      children: AboutUsRoutesConfig,
      meta: {
        title: 'About us'
      },
    },
  },
  connect_retailer_programs: {
    path: 'connect-retailer-program',
    data: {
      children: ConnectRetailerProgramRoutesConfig,
      meta: {
        title: 'Retailer Program'
      }
    },
  }
};
