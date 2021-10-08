import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentMethodPage } from './payment-method.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentMethodPage
  },
  {
    path: 'credit-card',
    loadChildren: () => import('./credit-card/credit-card.module').then( m => m.CreditCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentMethodPageRoutingModule {}
