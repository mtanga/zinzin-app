import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuscribePage } from './suscribe.page';

const routes: Routes = [
  {
    path: '',
    component: SuscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuscribePageRoutingModule {}
