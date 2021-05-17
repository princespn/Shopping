import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig as AdminRoutesConfig} from '@app/admin/routesConfig';

const routes: Routes = [
    {
      ...AdminRoutesConfig.account,
      loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    },
    {
        ...AdminRoutesConfig.user,
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    },
    {
      ...AdminRoutesConfig.order,
      loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    }, {
      ...AdminRoutesConfig.orderItemSelection,
      loadChildren: () => import('./order-item-selection/order-item-selection.module').then(m => m.OrderItemSelectionModule),
    },
  {
      ...AdminRoutesConfig.servicerequests,
      loadChildren: () => import('./servicerequests/servicerequests.module').then(m => m.OrdersModule),
    },
  {
      ...AdminRoutesConfig.storeconnections,
      loadChildren: () => import('./storeconnections/storeconnections.module').then(m => m.StoreconnectionsModule),
    },
  {
      ...AdminRoutesConfig.helpfeedbackrequests,
      loadChildren: () => import('./helpfeedback/helpfeedback.module').then(m => m.HelpfeedbackModule),
    },
  {
      ...AdminRoutesConfig.settingsrequests,
      loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    },
  {
      ...AdminRoutesConfig.signoutrequests,
      loadChildren: () => import('./signout/signout.module').then(m => m.SignoutModule),
    },
  {
    ...AdminRoutesConfig.faqs,
    loadChildren: () => import('./faqs/faqs.module').then(m => m.FaqsModule),
  },
  {
    ...AdminRoutesConfig.smartParcelBox,
    loadChildren: () => import('./smart-parcel-box/smart-parcel-box.module').then(m => m.SmartParcelBoxModule),
  },
    {
        ...AdminRoutesConfig.pages,
        loadChildren: () => import('./page/page.module').then(m => m.PageModule),
    },
  {
    ...AdminRoutesConfig.adminAboutUs,
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule),
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
