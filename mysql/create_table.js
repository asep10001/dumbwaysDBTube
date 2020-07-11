var db = require('./db-config')

let sql = 
// `CREATE TABLE NmMApBVao4.video_tb
// ( id INT NOT NULL AUTO_INCREMENT, title TEXT NOT NULL , category_id INT NOT NULL , attache TEXT NOT NULL , thumbnail TEXT NOT NULL, PRIMARY KEY(id) )
// ENGINE = InnoDB`;
// `CREATE TABLE NmMApBVao4.category_tb
// ( id INT NOT NULL AUTO_INCREMENT, name TEXT NOT NULL,
// PRIMARY KEY(id) )
// ENGINE = InnoDB`;

`CREATE TABLE NmMApBVao4.tabel_hasil AS
(SELECT video_tb.title, video_tb.attache, video_tb.thumbnail, video_tb.id AS id, category_tb.name AS name FROM video_tb JOIN category_tb ON category_tb.id = video_tb.category_id)`

db.query(sql, (err, result) => {
  if (err) throw err;
  console.log("Table created");

});