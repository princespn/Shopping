import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {RoutesConfig} from '@app/guest/routesConfig';
import {RoutesConfig as AppRoutesConfig} from '@app/routesConfig';
import {RoutesConfig as AdminRoutesConfig} from '@app/admin/routesConfig';
import {LayoutComponent} from '@app/admin/layout/layout.component';
import {LayoutComponent as FrontendLayout} from '@app/guest/layout/layout.component';
import {LayoutComponent as AuthLayout} from '@app/guest/auth/layout/layout.component';
import { AuthGuard } from '@gomcodoctor/services/auth';
import {GuestAuthGuard} from '@gomcodoctor/services/auth/guest-auth.guard';
import { MetaGuard } from '@ngx-meta/core';

const routes = [
  {
    ...AppRoutesConfig.coming_soon,
    loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        data: {
          children: AdminRoutesConfig
        },
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      }
      ]
  },
  {
    path: '',
    component: AuthLayout,
    canActivateChild: [GuestAuthGuard],
    children: [
      {
        ...AppRoutesConfig.login,
        loadChildren: () => import('./guest/auth/login/login.module').then(m => m.LoginModule),
      },
      // {
      //   ...AppRoutesConfig.register,
      //   loadChildren: () => import('./guest/auth/register/register.module').then(m => m.RegisterModule),
      // },
      // {
      //   ...AppRoutesConfig.forgot_password,
      //   loadChildren: () => import('./guest/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
      // },
      // {
      //   ...AppRoutesConfig.confirm_registration,
      //   loadChildren: () => import('./guest/auth/confirm-registration/confirm-registration.module').then(m => m.ConfirmRegistrationModule),
      // },
      // {
      //   ...AppRoutesConfig.reset_password,
      //   loadChildren: () => import('./guest/auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule),
      // },
    ]
  },
  {
    path: '',
    component: FrontendLayout,
    canActivateChild: [MetaGuard],
    children: [
      {
        path: '**',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}