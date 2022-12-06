import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangEditPage } from './barang-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BarangEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangEditPageRoutingModule {}
