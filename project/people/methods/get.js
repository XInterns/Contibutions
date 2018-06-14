var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "interns"
});

con.connect(function (err) {
  if (err) console.log(err);
});

const _get = (req, res) => {

  console.log("inside empty app get");
    con.query("select * from Contribution order by creation_date desc",function(err,result,fields){
        if(err)console.log(err)
        else res.send(result);
    });
};

module.exports = _get;