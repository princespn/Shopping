import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutesConfig} from '@app/guest/routesConfig';
import {HomeComponent} from '@app/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
            meta: {
                title: 'Affordable health for all',
                description: 'Home, home sweet home... and what?'
            }
        }
    },
    {
        ...RoutesConfig.account,
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
