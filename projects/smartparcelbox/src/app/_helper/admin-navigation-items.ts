import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icAssistant from '@iconify/icons-ic/twotone-assistant';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icHelp from '@iconify/icons-ic/twotone-help';
import {NavigationItem} from '@vex/interfaces/navigation-item.interface';
import icShoppingCart from '@iconify/icons-ic/twotone-shopping-cart';
import icWifi from '@iconify/icons-ic/twotone-wifi';
import icQuestionAnswer from '@iconify/icons-ic/twotone-question-answer';
import icExitToApp from '@iconify/icons-ic/twotone-exit-to-app';

export const AdminItems = (namedRoutesService, user = true): NavigationItem[] => {
    const items: NavigationItem[] = [
    ];
    if (user){
        items.push(
          {
            type: 'link',
            label: 'My Shopping',
            route: namedRoutesService.getRoute('admin_orders_list'),
            icon: icShoppingCart
          },
          {
            type: 'link',
            label: 'Smart Parcel Box',
            route: namedRoutesService.getRoute('admin_smart-parcel-box_detail', {id: 'me'}),
            icon: icAssigment
          },
          {
            type: 'link',
            label: 'Connect Retailer',
            route: namedRoutesService.getRoute('admin_storeconnections_list'),
            icon: icWifi
          },
          {
            type: 'link',
            label: 'Settings',
            route: namedRoutesService.getRoute('admin_settings_list'),
            icon: icSettings
          },
          {
            type: 'link',
            label: 'Help & Feedback',
            route: namedRoutesService.getRoute('admin_pages_list'),
            icon: icHelp
          },
          {
            type: 'link',
            label: 'Sign Out',
            route: namedRoutesService.getRoute('signout_detail'),
            icon: icExitToApp
          }
          );
    }
    return items;
};
