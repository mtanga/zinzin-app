import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { LoadService } from '../services/load.service';
//import { File } from '@awesome-cordova-plugins/file/ngx';
import { ViewmagPage } from '../viewmag/viewmag.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  
  
  categoryCollection: AngularFirestoreCollection<any>;
  category1: Observable<any[]>;
  homeCollection: AngularFirestoreCollection<any>;
  home: Observable<any[]>;
  principal: any = [];
  principal1: any = [];
  category: any;
  correctCategory : any;
  
  slider1: any ={
    value1 : "",
    value2:""
   
  };
  slider2: any ={
    value1 : "",
    value2:""
   
  };
  slider3: any ={
    value1 : "",
    value2:""
   
  };
  //private fileTransfer: FileTransferObject; 

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private loadingController : LoadingController,
    private readonly afs: AngularFirestore,
    public toastController: ToastController,
    public load : LoadService,
    public modalCtrl: ModalController,
  ) {}

  ngOnInit(): void {
    this.load.present();
    this.getContent();
    //this.getContentHome();
   /// this.presentToast(" Balayez l\'écran vers la droite depuis l\'extrémité gauche pour voir toute l\'actualité");
  }

  download(url) {
/*     this.fileTransfer = this.transfer.create();  
    this.fileTransfer.download(url, this.file.dataDirectory + 'magazine.pdf').then((entry) => {
      this.presentToast('Téléchargement terminé: ' + entry.toURL());
    }, (error) => {
      this.presentToast('Téléchargement échoué: ' + error);
    }); */
  }


  async viewMag(link) {
    const modal = await this.modalCtrl.create({
      component: ViewmagPage,
      componentProps: { url: link },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }

  getContent(){
    this.categoryCollection = this.afs.collection<any>('donwloads', ref => ref
    .orderBy('dateCreated','desc'));
  this.category = this.categoryCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      console.log(data)
      return { id, ...data };

    }))
  );   this.category.subscribe(data => {

    this.principal = data;
    console.log("libre", this.principal)
    this.load.dismiss();

  });



  }

  getContentHome(){
    const category = "pdg"
    const category1 = "editorial";
    this.homeCollection = this.afs.collection<any>('article', ref => ref
    .where('view', '==', category)
    .where('categoryArticle', '==', category1)
    .where('visible', '==', true)
    .orderBy('dateCreated','desc'));
  this.home = this.homeCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      console.log(data)
      return { id, ...data };

    }))
  );   this.home.subscribe(data => {

    this.principal1 = data;
    console.log(this.principal1)
    

  });



  }

  showDetail(article){
    console.log('Good')
    console.log(article)
    this.router.navigate(['/detail' ,article]);
  }

  slideChanged(){
    
   

    
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 8000
    });
    toast.present();
  }





}
