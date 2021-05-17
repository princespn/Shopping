import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icSettings from '@iconify/icons-ic/twotone-settings';
import {NavigationItem} from '@vex/interfaces/navigation-item.interface';
import icShoppingCart from '@iconify/icons-ic/twotone-shopping-cart';
import icHelp from '@iconify/icons-ic/twotone-help';
import faGlobeEurope from '@iconify/icons-fa-solid/globe-europe';
import faTruck from '@iconify/icons-fa-solid/truck';
import faBookOpen from '@iconify/icons-fa-solid/book-open';
import icExitToApp from '@iconify/icons-ic/twotone-exit-to-app';
import icEmail from '@iconify/icons-ic/twotone-email';


export const AdminItems = (namedRoutesService, user = true): NavigationItem[] => {
    const items: NavigationItem[] = [
    ];
    if (user){
        items.push(
          {
            type: 'subheading',
            label: 'Order',
            children: [
              {
                type: 'link',
                label: 'Couriers',
                route: namedRoutesService.getRoute('admin_couriers_list'),
                icon: faTruck
              },
              {
                type: 'link',
                label: 'Channels',
                route: namedRoutesService.getRoute('admin_channels_list'),
                icon: icShoppingCart
              }, {
                type: 'link',
                label: 'Orders',
                route: namedRoutesService.getRoute('admin_orders_list'),
                icon: icShoppingCart
              },
              {
                type: 'link',
                label: 'Return Process',
                route: namedRoutesService.getRoute('admin_return_process_list'),
                icon: icEmail
              },
            ]
          },
          {
            type: 'subheading',
            label: 'Templates',
            children: [
              {
                type: 'link',
                label: 'Email',
                route: namedRoutesService.getRoute('admin_email_templates_list'),
                icon: icEmail
              },
              {
                type: 'link',
                label: 'Layout',
                route: namedRoutesService.getRoute('admin_layout_templates_list'),
                icon: icEmail
              },
            ]
          },
          {
            type: 'subheading',
            label: 'Others',
            children: [
          {
            type: 'link',
            label: 'Countries',
            route: namedRoutesService.getRoute('admin_countries_list'),
            icon: faGlobeEurope
          },
          {
            type: 'link',
            label: 'Pages',
            route: namedRoutesService.getRoute('admin_pages_list'),
            icon: faBookOpen
          }, {
            type: 'link',
            label: 'Faqs',
            route: namedRoutesService.getRoute('admin_faqs_list'),
            icon: icHelp
          },
          {
            type: 'link',
            label: 'Settings',
            route: namedRoutesService.getRoute('admin_settings_list'),
            icon: icSettings
          },
          {
            type: 'link',
            label: 'Users',
            route: namedRoutesService.getRoute('admin_users_list'),
            icon: icSettings
          },
          {
            type: 'link',
            label: 'Sign Out',
            route: namedRoutesService.getRoute('signout_detail'),
            icon: icExitToApp
          }]}
          );
    }
    return items;
};
