
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  deja : any;
  color: any = "#e8e8e8";
  index: Promise<number>;

  constructor(
    private router: Router
  ) { 
    
  }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
    //console.log(this.slides);
  }

  slidesChanged() {
  this.slides.getActiveIndex().then(data=>{
      console.log(data);
      if(data == 1){
        this. color = "#c5e2e7";
      }
      else if(data == 2){
        this. color = "#e1121c";
      }
      else{
        this. color = "#e8e8e8";
      }
    }
      );
   // console.log("Current index is", currentIndex);
  }

  skip(){
       this.deja = 'true';
       localStorage.setItem('primer',this.deja);
       this.router.navigate(['/tabs/tab1']);
  }
  go(){
       this.deja = 'true';
       localStorage.setItem('primer',this.deja);
       this.router.navigate(['/tabs/tab1']);
  }

}
