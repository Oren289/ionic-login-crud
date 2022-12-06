import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangTambahPageRoutingModule } from './barang-tambah-routing.module';

import { BarangTambahPage } from './barang-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarangTambahPageRoutingModule
  ],
  declarations: [BarangTambahPage]
})
export class BarangTambahPageModule {}
