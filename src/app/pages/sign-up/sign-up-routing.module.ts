import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-up-fields',
    loadChildren: () => import('./sign-up-fields/sign-up-fields.module').then( m => m.SignUpFieldsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
