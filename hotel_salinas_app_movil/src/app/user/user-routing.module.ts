import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}