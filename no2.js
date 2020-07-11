function hitungIkan(hari, ikan) {
  var jumlah_ikan = 0;

  var perhitungan = hari / 46;

  for (var i = 1; i <= perhitungan; i++) {
    console.log(perhitungan);
    if (i <= perhitungan) {
      //ikan berkurang 6 persen sebelum melahirkan
      jumlah_ikan = ikan - (ikan / 100 * 6);
      // console.log(jumlah_ikan);
      //jumlah ikan setelah melahirkan sebanyak 5 per ekor
      jumlah_ikan = jumlah_ikan * 5;
      // console.log(jumlah_ikan);
      //jumlah ikan setelah melahirkan setiap 46 hari
      ikan = jumlah_ikan;
      console.log(ikan);
    } else {

    }


  }
  return console.log(jumlah_ikan);
  //algoritma yang dipakai adalah
  // jumlah ikan awal adalah 1476 dengan asumsi kehilangn 6% ikan bertambah 5 kali lipat
  // per 46 hari 
  //
  //dengan asumsi tersebut maka jumlah ikan tidak stagnan di 1476 tetapi harus dinamis berubah ketika hari sudah melebihi 46 atau kelipatannya
  // ketika hari 471 maka perulangan yang terjadi adalah 10 kali lebih maka dengan asumsi demikian yang terjadi adalah jumlah ikan akan terus bertambah 5 kali lipat dari jummlah ikan sebelumnya yan dinamis
  //kekurangan dari soal ini adalah tidak adanya batasan atau ikan dewasa berapa hari dan dapat berreproduksi berapa hari maka diasumsikan bahwa ikan akan dewasa pada hari ke 46
}

hitungIkan(46, 1476);
hitungIkan(471, 1476);
hitungIkan(92, 1476);