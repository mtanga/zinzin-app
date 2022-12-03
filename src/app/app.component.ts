import { Component } from '@angular/core';
// other imports...
import { TranslateService } from '@ngx-translate/core'; // add this
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

    showSubmenu: boolean = false;
    language: string = this.translateService.currentLang; // 2 
    texting : any = {};
    infos: any = [];
    cat: any;
    subInfos: any = [];
    elt: any;

  constructor(
    private translate: TranslateService, // add this
    private router: Router,
    private api : ApiService,
    private translateService: TranslateService,
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    let lang = localStorage.getItem('langi');
    if (lang!=null || lang!=undefined){
        this.translate.setDefaultLang(lang); // add this
      }
      else{
        this.translate.setDefaultLang('en'); // add this
    }
    this.setl();
  }

  setl(){
    let foo = this.translateService.get('chaines').subscribe((data:any)=> {
      console.log(data);
      this.texting = data;
     });
     this.getCategories();
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
/*   set(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getStatus();
    });
  } */

  getStatus(){
        let first = localStorage.getItem('primer');
        if (first==null || first==undefined){
            this.router.navigate(['/onboarding']);
          }
/*         else{
           this.router.navigate(['/login']);
            let connected = false;
              if(connected==false ){
                this.router.navigate(['/login']);
                connected = true;
              }
              else{
                  this.router.navigate(['/tabs/tab1']);
              }
        } */
            
      }
  
      menuItemHandler(item): void {
        this.elt = item.id;
        this.showSubmenu = !this.showSubmenu;
        this.getSub(item.id);
      }


  categoryGo(category, id){
    localStorage.removeItem('category');
    localStorage.setItem('category', category);
    this.router.navigate(['/category', id]);
  }

}
