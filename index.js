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

//get halaman video_tb no4a beserta kategori
app.get('/video_tb', (req, res) => {

  var sql = `SELECT *, video_tb.id AS id, category_tb.name AS name FROM video_tb JOIN category_tb ON category_tb.id = video_tb.category_id`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('jawaban_4a', { results: results });
    console.log(results);
  });
});

//get halaman video_tb no4b berdasarkan kategori
app.get('/videoAsCategory', (req, res) => {

  var sql = `SELECT * FROM tabel_hasil WHERE name = "horror"`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('jawaban_4b', { results: results });
    console.log(results);
  });
});


//get halaman pertama
app.get('/', (req, res) => {

  var sql = `SELECT * FROM tabel_hasil`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('view', { results: results });
    console.log(results);
  });
});

//get halaman category
app.get('/category', (req, res) => {

  var sql = `SELECT * FROM category_tb`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('category', { results: results });
    console.log(results);
  });
});

//get detail video
app.get("/video/:id", function(req, res) {
  var video_id = parseInt(req.params.id);
  let sql = 'SELECT * FROM tabel_hasil WHERE tabel_hasil.id =?';
  let query = db.query(sql, video_id, (error, results) => {
    if (error) {
      throw error;
    } else {
        res.render("detail", { results: results });
        console.log(results);
    }
  });
});

//route untuk update data video
app.post('/update', (req, res) => {
  var id = parseInt(req.params.id);
  let sql = `UPDATE tabel_hasil SET title='${req.body.title}', attache='${req.body.attache}', thumbnail='${req.body.thumbnail}', name='${req.body.name}', url_video='${req.body.url_video}' WHERE id = ${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw (err);
    res.redirect('/');

  });
});


//post add video
app.post("/add_video", function(req, res) {
  let data = { title: req.body.title, attache: req.body.attache, thumbnail: req.body.thumbnail, name: req.body.name, url_video: req.body.url_video };
  let sql = "INSERT INTO tabel_hasil  SET?";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/');
  });
});

//post add kabupaten
app.post("/add_category", function(req, res) {
  let data = { name: req.body.name };
  let sql = "INSERT INTO category_tb  SET? ";
  let query = db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/category');
  });
});


//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
