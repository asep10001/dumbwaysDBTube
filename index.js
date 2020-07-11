const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const db = require('./mysql/db-config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');

//get halaman video_tb no4a
app.get('/video_tb', (req, res) => {

  var sql = `SELECT * FROM video_tb`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('jawaban_4a', { results: results });
    console.log(results);
  });
});


//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
