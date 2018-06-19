var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "interns"
});

con.connect(function(err) {
    if (err) throw err;
});



module.exports = con;