import icAssigment from '@iconify/icons-ic/twotone-assignment';
import {NavigationItem} from '@vex/interfaces/navigation-item.interface';

export const AdminItems = (namedRoutesService, user = true): NavigationItem[] => {
    const items: NavigationItem[] = [
    ];
    if (user){
        items.push(
          {
            type: 'subheading',
            label: 'Warehouse',
            children: [
              {
                type: 'link',
                label: 'Products',
                route: namedRoutesService.getRoute('admin_products_list'),
                icon: icAssigment
              }, {
                type: 'link',
                label: 'Products Stock Log',
                route: namedRoutesService.getRoute('admin_productstocklogs_list'),
                icon: icAssigment
              },
            ]
          },
          {
            type: 'subheading',
            label: 'Purchase Orders',
            children: [
              {
                type: 'link',
                label: 'PO Products Delivered',
                route: namedRoutesService.getRoute('admin_supplier_order_item_receipts_list'),
                icon: icAssigment
              }, {
                type: 'link',
                label: 'Purchase Orders',
                route: namedRoutesService.getRoute('admin_supplier_orders_list'),
                icon: icAssigment
              }, {
                type: 'link',
                label: 'Purchase Order Items',
                route: namedRoutesService.getRoute('admin_supplier_orders_items_list'),
                icon: icAssigment
              },
              {
                type: 'link',
                label: 'Containers',
                route: namedRoutesService.getRoute('admin_container_list'),
                icon: icAssigment
              },
            ]
          },
          // {
          //   type: 'link',
          //   label: 'Sign Out',
          //   route: namedRoutesService.getRoute('signout_detail'),
          //   icon: icAssigment
          // },
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

          );
    }
    return items;
};
