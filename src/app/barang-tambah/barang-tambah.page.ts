import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-barang-tambah',
  templateUrl: './barang-tambah.page.html',
  styleUrls: ['./barang-tambah.page.scss'],
})
export class BarangTambahPage implements OnInit {
  id: any;
  nama_barang: any;
  harga: any;
  constructor(private router: Router, public _apiService: ApiService) {}
  ngOnInit() {}
  addBarang() {
    let data = {
      nama_barang: this.nama_barang,
      harga: this.harga,
    };
    this._apiService.tambah(data, '/tambah_barang.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.nama_barang = '';
        this.harga = '';
        this._apiService.notif('berhasil input barang');
        this.router.navigateByUrl('/barang');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input Matakuliah');
      },
    });
  }
}
