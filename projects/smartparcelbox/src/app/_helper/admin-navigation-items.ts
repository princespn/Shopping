import icAssigment from '@iconify/icons-ic/twotone-assignment';
import {NavigationItem} from '@vex/interfaces/navigation-item.interface';

export const AdminItems = (namedRoutesService, user = true): NavigationItem[] => {
    const items: NavigationItem[] = [
    ];
    if (user){
        items.push(
          {
            type: 'subheading',
            label: 'Products',
            children: [
              {
                type: 'link',
                label: 'Products',
                route: namedRoutesService.getRoute('admin_products_list'),
                icon: icAssigment
              },
              {
                type: 'link',
                label: 'Supplier Products',
                route: namedRoutesService.getRoute('admin_supplier-products_list'),
                icon: icAssigment
              },
              {
                type: 'link',
                label: 'Channel Products',
                route: namedRoutesService.getRoute('admin_channel-products_list'),
                icon: icAssigment
              },

            ]
          },
          {
            type: 'link',
            label: 'Feeds',
            route: namedRoutesService.getRoute('admin_feeds_list'),
            icon: icAssigment
          },
          {
          type: 'subheading',
          label: 'Config',
          children: [
            {
              type: 'link',
              label: 'Channels',
              route: namedRoutesService.getRoute('admin_channels_list'),
              icon: icAssigment
            },
            {
              type: 'link',
              label: 'Channel Settings',
              route: namedRoutesService.getRoute('admin_channel-settings_list'),
              icon: icAssigment
            },
            {
              type: 'link',
              label: 'Suppliers',
              route: namedRoutesService.getRoute('admin_suppliers_list'),
              icon: icAssigment
            },
            {
              type: 'link',
              label: 'Supplier Settings',
              route: namedRoutesService.getRoute('admin_supplier-settings_list'),
              icon: icAssigment
            },
          ]
        },
          {
            type: 'subheading',
            label: 'Admin',
            children: [
                {
                    type: 'link',
                    label: 'Users',
                    route: namedRoutesService.getRoute('admin_users_list'),
                    icon: icAssigment
                },
              {
                type: 'link',
                label: 'User Groups',
                route: namedRoutesService.getRoute('admin_userGroups_list'),
                icon: icAssigment
              }
            ]
        },
          {
            type: 'subheading',
            label: 'Log',
            children: [
              {
                type: 'link',
                label: 'Cron Log',
                route: namedRoutesService.getRoute('admin_cron-logs_list'),
                icon: icAssigment
              },
              {
                type: 'link',
                label: 'Channel Request Log',
                route: namedRoutesService.getRoute('admin_channel-request-logs_list'),
                icon: icAssigment
              }
            ]
          });
    }
    return items;
};
