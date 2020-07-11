function sort_array(data) {

  function tukar(data, ind_1, ind_2) {
    var temp = data[ind_1];
    data[ind_1] = data[ind_2];
    data[ind_2] = temp;
  }

  function sorting(data) {
    for (var i = 0; i < data.length; i++) {
      data[i].sort();
    }
  }

  var len = data.length,
    i, j, pembatas;

  var i = 0;

  while (i < len) {
    for (j = 0, pembatas = len - i; j < pembatas && j + 1 < len; j++) {
      if (data[j].length > data[j + 1].length) {
        sorting(data);
        tukar(data, j, j + 1);
      } else {
        sorting(data);
      }
      //untuk mengecek
      //  console.log(data);

    }
    i++;

  }
  return console.log(data);
}

//contoh pertama data

sort_array([['g', 'h', 'i', 'j'], ['g', 'e', 'f'], ['a', 'c', 'b', 'e', 'd']]);

//contoh kedua
sort_array([['g', 'e', 'f'], ['a', 'c', 'b', 'e', 'd']]);


=======================================================================================\
