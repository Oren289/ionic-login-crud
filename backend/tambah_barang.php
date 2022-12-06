<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$nama_barang = trim($data['nama_barang']);
$harga = trim($data['harga']);
//jika nama matakuliah dan keterangan tidak kosong
if ($nama_barang != '' and $harga != '') {
$query = mysqli_query($con, "insert into barang(nama_barang, harga) values('$nama_barang','$harga')");
$pesan['status'] = 'berhasil';
} else {
$pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($con);
?>