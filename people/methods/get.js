


const _get = (req, res) => {
    const connection = req.app.get('sql-connection');
    connection.query("select * from Contribution order by creation_date desc",function(err,result,fields){
        if(err)console.log(err)
        else {res.send(result);}
    });
};

module.exports = _get;