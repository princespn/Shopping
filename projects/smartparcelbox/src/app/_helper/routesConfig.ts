import {RoutesConfig as GuestRoutesConfig} from '@app/guest/routesConfig';
import {RoutesConfig as AdminRoutesConfig} from '@app/admin/routesConfig';
import {RoutesConfig as AppRoutesConfig} from '@app/routesConfig';


export const RoutesConfig = {
    ...GuestRoutesConfig,
    ...AdminRoutesConfig,
    ...AppRoutesConfig,
};
