function cetakGambar(num) {
  var baris = num;
  var kolom = num;
  var cetak = "";

  for (var i = 0; i < baris; i++) {
    for (var j = 0; j < kolom; j++) {
      if (i % 2 !== 0) {
        if (j % 2 !== 0) {
          cetak += "= "
        } else {
          cetak += '* ';
        }

      } else {
        if (j % 2 !== 0) {
          cetak += "* "
        } else {
          cetak += '= ';
        }
      }

    }
    cetak += "\n"
  }
  return console.log(cetak);
}

cetakGambar(5);