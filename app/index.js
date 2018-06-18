var express = require('express');
var mysql = require('mysql');
var cors=require('cors')

var app = express();

app.use(cors())

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "root",
   database: "interns"
});

con.connect(function(err){
  if(err)
    console.log(err);
});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/search',function(req, res){
  var n=req.query.name;
     con.query("SELECT * FROM info WHERE contributor_name LIKE '%"+n+"%'", function (err, result, rows) {
       if (err)
        console.log(err);
      else
        res.send(result);
   });
});  

 app.get('/null', function(req, res){
  con.query('SELECT * FROM info', function(err, result, rows){res.send(result)});
});

//  app.get('/null',  function (req, res) {
//   res.send("Enter a route!")
// });

app.listen(process.env.PORT||7000, function () {
   console.log("server has started!!!")
});