

const _find = ( req, res) => {
  const connection = req.app.get('sql-connection');

  var string_param= req.params.queryValue;
    connection.query("select * from Contribution where contributor_name like '%"+string_param+"%' or message like '%"+string_param+"%' order by creation_date desc"
                 ,function(err,result,fields){
        if(err)console.log(err)
        else{
            res.send(result);
        }
    });
};

module.exports = _find;

