import { Component, ApplicationModule } from "@angular/core";

import { Platform, NavController, MenuController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { TranslateService } from "@ngx-translate/core";

// window.addEventListener('keyboardWillHide', () => {
//   const app = document.querySelector('ion-app');
//   window.requestAnimationFrame(() => {
//     app.style.height = '100%';
//     window.requestAnimationFrame(() => {
//       app.style.height = '';
//     });
//   });
// });

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  // providers:[TranslatePipe]
})
export class AppComponent {
  public selected = 1;
  public logedIn = window["isLogedIn"];
  public lang:string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private navCtrl: NavController,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    window["isLogedIn"] = false;
    this.translate.addLangs(["en", "ar"]);
    this.lang = this.translate.getBrowserLang() || 'en';
    this.translate.setDefaultLang(this.lang);
    this.translate.onLangChange.subscribe((l:any)=>{
      document.dir=(l.lang == 'ar')?'rtl':'ltr';
      this.lang=l.lang;
      console.log((this.lang == 'ar')?'end':'start')
    })
    document.dir=(this.lang == 'ar')?'rtl':'ltr';
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  first() {
    this.menu.close();
    this.navCtrl.navigateRoot("main/");
    this.selected = 1;
  }
  second() {
    this.menu.close();
    this.navCtrl.navigateRoot("main/second");
    this.selected = 2;
  }
  changeLanuage(){
    this.lang=(this.lang=='en')?'ar':'en'
    this.translate.use(this.lang);
  }
}
