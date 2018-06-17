var mysql= require('mysql');

var connect=()=>{
    const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "interns"
  });
  con.connect(function (err) {
    if (err) console.log(err);
  });
  return con;
}

  //module.exports= connect;