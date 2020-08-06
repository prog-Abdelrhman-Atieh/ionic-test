import { IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-categories',
  templateUrl: './services-categories.page.html',
  styleUrls: ['./services-categories.page.scss'],
})
export class ServicesCategoriesPage implements OnInit {
  @ViewChild(IonSlides) slider:IonSlides;

  constructor(
    private translate:TranslateService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.slider.startAutoplay();
  }

  onClick(){
    console.log('hellow world')
  }

}
