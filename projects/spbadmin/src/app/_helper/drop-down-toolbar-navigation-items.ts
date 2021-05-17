
import icShoppingCart from '@iconify/icons-ic/twotone-shopping-cart';
import {MenuItem} from '@vex/layout/toolbar/toolbar-user/interfaces/menu-item.interface';
import faUser from '@iconify/icons-fa-solid/user';

export const DropDownToolbarNavigationItems = (namedRoutesService, user = true): MenuItem[] => {
  const items: MenuItem[] = [
  ];
  if (user){
    items.push(
      {
        colorClass: '',
        description: '',
        id: '',
        label: 'My Order',
        route: namedRoutesService.getRoute('admin_orders_list'),
        icon: icShoppingCart,
      },
      {
        colorClass: '',
        description: '',
        id: '',
        label: 'My Account',
        route: namedRoutesService.getRoute('admin_settings_list'),
        icon: faUser
      },
    );
  }
  return items;
};
