import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  @ViewChild(IonSlides) slider: IonSlides

  public slides = [
    {
      title: this.translate.instant('welcome_page.slide_1_title'),
      description: this.translate.instant('welcome_page.slide_1_desc'),
      image: "assets/images/welcome-page-images/1.jpg",
    },
    {
      title: this.translate.instant('welcome_page.slide_2_title'),
      description: this.translate.instant('welcome_page.slide_2_desc'),
      image: "assets/images/welcome-page-images/2.jpg",
    },
    {
      title: this.translate.instant('welcome_page.slide_3_title'),
      description: this.translate.instant('welcome_page.slide_3_desc'),
      image: "assets/images/welcome-page-images/3.jpg",
    }
  ]

  constructor(
    // private navParams:ActivatedRoute,
    private translate:TranslateService,
    private navigate:NavController
  ) { }

  ngOnInit(){
  }

  goForword(){
    this.navigate.navigateForward(['signup','sign-up-fields']);
  }

  goToLastSlide(){
    this.slider.slideTo(3,500);
  }

}
