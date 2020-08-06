import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  constructor(
    public translate:TranslateService,
    private menuCtrl:MenuController
  ) {

  }

  ngOnInit() {
  }
  myfunc(e:string){
    console.log(e);
  }
  onActivate(element){
    console.log('element =',element);
    element.update(event=>{
      console.log('EVENT = ',event)
    })
  }

  public openCamera(){
    console.log("LANG = ",this.translate.currentLang)
    if(this.translate.currentLang == 'ar'){
      this.translate.use('en');
    }else{
      this.translate.use('ar');
    }
  }

  changeLanuage(){
    // this.lang=(this.lang=='en')?'ar':'en'
    // this.translate.use(this.lang);
  }

}
