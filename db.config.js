let mysql = require('mysql');
let con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "harsh_api"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    module.exports = con