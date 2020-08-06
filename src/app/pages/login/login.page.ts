import { Component, OnInit, ViewChild } from "@angular/core";
import { MenuController, NavController, IonSlides, Platform } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slide:IonSlides;
  // @ViewChild('companyField') div:any;

  public switch_toCompany_account:boolean = false;
  public returnedUsersVar:boolean = false;

  constructor(
    private menu: MenuController,
    private translate: TranslateService,
    private navCtrl: NavController,
    private platform:Platform
  ) {}

  ngOnInit() {
    this.menu.enable(false, "mainRoute");
  }

  ionViewDidEnter(){
    this.slide.lockSwipes(true);
    if(!this.platform.is('ios'))
      this.platform.backButton.subscribe(()=>{
        
      });
  }

  login(form:NgForm) {
    console.log(form)
    this.menu.enable(true, "mainRoute");
    window["isLogedIn"] = true;
    this.navCtrl.navigateRoot("");
  }

  checkDevice():boolean {
    return window.innerWidth > window.innerHeight * 0.7;
  }

  returnedUsers(){
    this.returnedUsersVar=true;
    this.slideTo('next');
  }

  backReturnedUsers(){
    this.returnedUsersVar=false;
    this.slideTo('prev');
  }

  crateNewAccount(){
    this.navCtrl.navigateForward('signup');
  }

  private slideTo(direction){
    this.slide.lockSwipes(false);
    switch (direction){
      case 'next': 
        this.slide.slideNext();
        break;
      case 'prev': 
        this.slide.slidePrev();
        break;
    }
    this.slide.lockSwipes(true);
  }
  // changeCompany(){
  //   if(this.switch_toCompany_account){
  //     this.div.nativeElement.parentElement.style.maxHeight=`${this.div.nativeElement.offsetHeight}px`
  //   }else{
  //     this.div.nativeElement.parentElement.style.maxHeight='0px'
  //   }
  // }

}
