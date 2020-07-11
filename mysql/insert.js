var db = require("./db-config");

db.getConnection(function(err) {
    if (err) throw err;
    
    let sql = 
    `INSERT INTO video_tb (title, category_id, attache, thumbnail) 
    VALUES ("Dolitle", "3", 'cecep', "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png")`;
    // `INSERT INTO kabupaten_tb (Nama, Provinsi_id, Diresmikan, photo) 
    // VALUES ("Kabupaten Bandung", 1, "20 April 1641", "./assets/images/kabupaten-bandung.jpg")`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});