import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { DropDownItemComponent } from './drop-down-item/drop-down-item.component';



@NgModule({
  declarations: [
    MenuItemsComponent,
    DropDownItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    MenuItemsComponent,
    DropDownItemComponent
  ]
})
export class ComponentsModule { }
