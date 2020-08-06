import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesCategoriesPageRoutingModule } from './services-categories-routing.module';

import { ServicesCategoriesPage } from './services-categories.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesCategoriesPageRoutingModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [ServicesCategoriesPage]
})
export class ServicesCategoriesPageModule {}
