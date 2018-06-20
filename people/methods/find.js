var paginate=require('./paginate')

const _find = ( req, res) => {
const connection = req.app.get('sql-connection');

var string_param= req.query.queryparam;
if(string_param===null)
{
    const _get=require('./methods/get')
    router.get('/', _get)
}
else
{
    connection.query(`select * from info where contributor_name like '${string_param}' or mesage like '%{$string_param}%' order by creation_date desc`,function(err,result){
        if(err)
            console.log(err)
        else
        {
            response=paginate(req, result)
            res.send(response);
        }
    });
};
}

module.exports = _find;

