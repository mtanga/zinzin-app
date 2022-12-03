import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'; // 1
//import { EmailComposer } from '@ionic-native/email-composer';
import { ToastController, Platform, AlertController } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { ApiService } from '../services/api.service';
declare var cordova;
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  log: boolean;
  showSubmenu: boolean = false;
  language: string = this.translateService.currentLang; // 2 
  texting : any = {};
  email = {
  to: 'hello@micheltanga.com',
  cc: 'michelhtanga@gmail.com',
  bcc: ['micheltanga@yandex.com'],
  attachments: [
    'file://img/logo.png',
    'res://icon.png',
    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
    'file://README.pdf'
  ],
  subject: 'GT Finance new topic',
  body: 'Hello, i need help!',
  isHtml: true
};
  infos: any = [];
  cat: any;
  subInfos: any = [];
  elt: any;

  constructor(
    public router: Router,
    private translateService: TranslateService,
    //private callNumber: CallNumber,
    //private emailComposer: EmailComposer
    private alertController : AlertController,
     private toastController : ToastController,
     private menu: MenuController,
     public platform: Platform,
     private socialSharing: SocialSharing,
     private api : ApiService
     ) 
     {
    this.log = false;
    }

  ngOnInit() {
    let foo = this.translateService.get('chaines').subscribe((data:any)=> {
      console.log(data);
      this.texting = data;
     });
     this.getCategories();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  getCategories(){
    this.api.getData("m_categories").subscribe( async (da:any)=>{
      console.log("icic", da);
      this.cat = da;
      localStorage.setItem('post_categories', JSON.stringify(da));
      da.forEach(element => {
        if(element.parent==0){
          this.infos.push(element)
        }
      });

    })
  }

  getSub(id){
    console.log(id);
    this.subInfos = [];
    console.log( this.cat)
    this.cat.forEach(element => {
      if(element.parent==id){
        console.log(element);
        this.subInfos.push(element);
        console.log(this.subInfos);
      }
    });
    //return this.subInfos;
  }

  about(){
    this.router.navigate(['/credits']);
  }


  menuItemHandler(item): void {
    this.elt = item.id;
    this.showSubmenu = !this.showSubmenu;
    this.getSub(item.id);
   
  }


  SendEmail(){
      // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['hello@micheltanga.com']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }





async note(){
    const alert = await this.alertController.create({
      header: this.texting.notet,
      message: this.texting.noteexp,
      buttons: [
        {
          text: this.texting.Cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: this.texting.Validate,
          handler: (data) => {
            console.log('Confirm Ok');
            
          }
        }
      ]
    });
    await alert.present();
}


async invite(){
    const alert = await this.alertController.create({
      header: this.texting.SendMeMail,
      message: this.texting.mailSend,
      buttons: [
        {
          text: this.texting.Cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: this.texting.Validate,
          handler: (data) => {
            console.log('Confirm Ok');
              const url = "https://test.camertour.net"
              this.socialSharing.share('GT Finance', null, 'test', url);
            
          }
        }
      ]
    });
    await alert.present();
}

chat() {
  window.open("https://api.whatsapp.com/send?phone=237674717852", "_self");

}


async contact(){
    const alert = await this.alertController.create({
      header: this.texting.smst,
      message: this.texting.sms,
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder : ' need help'
        }
      ],
      buttons: [
        {
          text: this.texting.Cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: this.texting.sende,
          handler: (data) => {
            console.log('Confirm Ok');
            if(data.email.trim() != ''){
              console.log('email : ' + data.email);
              //this.auth.passwordResetEmail(data.email)
              this.presentToast(this.texting.checksms);
            }
            
          }
        }
      ]
    });
    await alert.present();
}


 /* Function Shows Notifications */
  async presentToast(message : string){
    const toast = await this.toastController.create({
      message: message,
      duration: 6000
    });
    toast.present();
  }

  categoryGo(category, id){
    localStorage.removeItem('category');
    localStorage.setItem('category', category);
    this.router.navigate(['/category', id]);
  }

}


