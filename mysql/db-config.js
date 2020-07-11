const mysql = require('mysql');

var db = mysql.createPool({
  host: "remotemysql.com",
  user: "NmMApBVao4",
  password: "wdugjGF98y",
  database: "NmMApBVao4"
});

db.getConnection((err) => {
  if (err) throw err;
  console.log('terkoneksi');
})

module.exports = db;