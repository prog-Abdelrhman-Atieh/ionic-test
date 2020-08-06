import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesCategoriesPage } from './services-categories.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesCategoriesPageRoutingModule {}
