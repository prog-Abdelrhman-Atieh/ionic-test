import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpFieldsPageRoutingModule } from './sign-up-fields-routing.module';

import { SignUpFieldsPage } from './sign-up-fields.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpFieldsPageRoutingModule
  ],
  declarations: [SignUpFieldsPage]
})
export class SignUpFieldsPageModule {}
