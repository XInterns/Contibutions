var mysql = require('mysql');

var con = mysql.createConnection({
    host: "xi-apps.in",
    user: "xi-app-readonly",
    password: "R3@don1y@x1@pp",
    database: "xi-app-data",
    multipleStatements: true

});

con.connect(function(err) {
    if (err) throw err;
});
module.exports = con;