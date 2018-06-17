
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


const _find = (req, res) => {

  var string_param= req.params.queryValue;
    con.query("select * from Contribution where contributor_name like '%"+string_param+"%' or message like '%"+string_param+"%' order by creation_date desc"
                 ,function(err,result,fields){
        if(err)console.log(err);
        else{
            res.send(result);
        }
    });
};

module.exports = _find;

