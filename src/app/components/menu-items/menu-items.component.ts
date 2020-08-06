import { BackendURL } from './../../enums/backend-url.enum';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent implements OnInit {

  constructor(
    private menu: MenuController,
    public translate:TranslateService
  ) { }

  ngOnInit() {
    console.log(BackendURL.backendURL);
  }
}
