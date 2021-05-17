import {RoutesConfig as AccountRoutesConfig} from '@app/guest/account/routesConfig';

export const RoutesConfig = {
  account: {
    path: 'account',
    data: {
      children: AccountRoutesConfig
    },
  },
};
