import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangTambahPage } from './barang-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: BarangTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangTambahPageRoutingModule {}
