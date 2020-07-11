var db = require('./db-config')

let sql = 
// `CREATE TABLE NmMApBVao4.video_tb
// ( id INT NOT NULL AUTO_INCREMENT, title TEXT NOT NULL , category_id INT NOT NULL , attache TEXT NOT NULL , thumbnail TEXT NOT NULL, PRIMARY KEY(id) )
// ENGINE = InnoDB`;
`CREATE TABLE NmMApBVao4.category_tb
( id INT NOT NULL AUTO_INCREMENT, name TEXT NOT NULL,
PRIMARY KEY(id) )
ENGINE = InnoDB`;

db.query(sql, (err, result) => {
  if (err) throw err;
  console.log("Table created");

});