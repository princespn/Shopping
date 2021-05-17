// import icLayers from '@iconify/icons-ic/twotone-layers';
// import {RoutesConfig} from '@gomcodoctor/_helper/routesConfig';
import {NavigationItem} from '@vex/interfaces/navigation-item.interface';



export const GuestItems = (namedRoutesService, user = false): NavigationItem[] => {
  const items: NavigationItem[] = [
  ];
  if (user) {
    items.push(
      {
        type: 'link',
        label: 'About Us',
        route: namedRoutesService.getRoute('about-us'),
      },
/*      {
        type: 'link',
        label: 'Features',
        route: namedRoutesService.getRoute('order-tracking'),
      },*/
      {
        type: 'link',
        label: 'Register Smart Parcel Box',
        route: namedRoutesService.getRoute('admin_smart-parcel-box_detail'),
      },
   /*   {
        type: 'link',
        label: 'Retailer Program',
        route: namedRoutesService.getRoute('connect-retailer-program'),
      },*/
      {
        type: 'link',
        label: 'Contact Us',
        route: namedRoutesService.getRoute('contact-us'),
      },
    );
  }else{
    items.push(
      {
        type: 'link',
        label: 'About Us',
        route: namedRoutesService.getRoute('about-us'),
      },
/*      {
        type: 'link',
        label: 'Features',
        route: namedRoutesService.getRoute('order-tracking'),
      },*/
      {
        type: 'link',
        label: 'Register Smart Parcel Box',
        route: namedRoutesService.getRoute('register-smart-parcel-box'),
      },
/*      {
        type: 'link',
        label: 'Retailer Program',
        route: namedRoutesService.getRoute('connect-retailer-program'),
      },*/
      {
        type: 'link',
        label: 'Contact Us',
        route: namedRoutesService.getRoute('contact-us'),
      },
    );
  }
  return items;
};
