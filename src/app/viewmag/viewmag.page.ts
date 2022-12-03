import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';


@Component({
  selector: 'app-viewmag',
  templateUrl: './viewmag.page.html',
  styleUrls: ['./viewmag.page.scss'],
})
export class ViewmagPage implements OnInit {
   public url: any;;
  
    constructor(
      private activeRoute:ActivatedRoute,
      public modalCtrl:ModalController,
      public navParms:NavParams,
      private document: DocumentViewer,
      public  sanitizer:DomSanitizer
      ) { 
        console.log(' this.navParms', this.navParms.data.url)
          this.url = this.navParms.data.url
         //this.sanitizer.bypassSecurityTrustResourceUrl(this.navParms.data.url);
  /*        const options: DocumentViewerOptions = {
          title: 'Zinzin Magazine'
        } */
        
       // this.document.viewDocument(this.navParms.data.url, 'application/pdf', options)
        
    }
  
    ngOnInit() {
    }
  
    dismiss(){
      this.modalCtrl.dismiss();
    }
  
  }