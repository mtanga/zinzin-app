import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmagPage } from './viewmag.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmagPageRoutingModule {}
