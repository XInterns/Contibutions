var paginate=require('./paginate')
const _clustering=(req, res)=>{
        const connection = req.app.get('sql-connection');
        var results=[]
        var cluster=""
        for(var i=1;i<=Object.keys(queries).length;i++)
            cluster=cluster+`select * from info where mesage like '%${queries[i]}%' order by creation_date desc;\n`;

        connection.query(cluster,function(err,result,fields)
        {
                    if(err)
                        throw err;
                    for(j=0;j<result.length;j++)
                    {
                        for(k=0;k<result[j].length;k++)
                            results.push(JSON.parse(JSON.stringify(result[j][k])))
                        
                    }
                    console.log(results)
                    response=paginate(req, results) 
                    console.log(response)
                    res.send(response)
        })
}

module.exports=_clustering