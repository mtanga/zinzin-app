import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { IonicModule, MenuController } from "@ionic/angular";
import { MenusComponent } from './menus/menus.component';

@NgModule({
  declarations: [
     MenusComponent
    ],
  imports: [
      CommonModule,
      FormsModule,
      IonicModule],
  entryComponents: [
    MenusComponent
  ],
  exports: [
        MenusComponent
    ]
})
export class ComponentsModule {}
