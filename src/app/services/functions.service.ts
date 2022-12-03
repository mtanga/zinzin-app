import { Injectable } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { MenusComponent } from '../components/menus/menus.component';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(
    private socialSharing: SocialSharing,
    private alertController : AlertController,
    public popoverController: PopoverController,
  ) { 

  }

  async share(post){
    const alert = await this.alertController.create({
      header: "Partager avec des amis ?",
      message: "Souhaitez-vous réllement partager '"+post.title.rendered+"' avec vos amis ?",
      buttons: [
        {
          text: "Non",
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: "Oui partager",
          handler: (data) => {
            console.log('Confirm Ok');
              this.socialSharing.share("Challenge International", null, post.title.rendered, post.featured_url);
            
          }
        }
      ]
    });
    await alert.present();
}

async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: MenusComponent,
    cssClass: 'custom-popover',
    event: ev,
    translucent: true
  });
  return  popover.present();
}


}
