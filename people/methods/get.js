var paginate=require('./paginate')

const _get = (req, res) => {
    const connection = req.app.get('sql-connection');
    connection.query("select * from info order by creation_date desc",function(err,result){
        if(err)
            console.log(err)
        else 
        {
            response=paginate(req, result)
            res.send(response);
        }
    });
};

module.exports = _get;