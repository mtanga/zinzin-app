import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscribePageRoutingModule } from './suscribe-routing.module';

import { SuscribePage } from './suscribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuscribePageRoutingModule
  ],
  declarations: [SuscribePage]
})
export class SuscribePageModule {}
