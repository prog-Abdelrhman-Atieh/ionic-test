import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpFieldsPage } from './sign-up-fields.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpFieldsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpFieldsPageRoutingModule {}
