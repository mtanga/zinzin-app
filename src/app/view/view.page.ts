import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  public videourl;
  
    constructor(
      private activeRoute:ActivatedRoute,
      public modalCtrl:ModalController,
      public navParms:NavParams,
      public  sanitizer:DomSanitizer
      ) { 
        console.log(' this.navParms', this.navParms.data.url)
          this.videourl = this.navParms.data.url
         console.log(this.videourl)
    }
  
    ngOnInit() {
    }
  
    dismiss(){
      this.modalCtrl.dismiss();
    }
  
  }