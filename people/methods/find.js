var paginate=require('./paginate')
const express = require('express');
const router = express.Router();
const cluster_values= require('./clusters')


const _find = ( req, res) => {
    const connection = req.app.get('sql-connection');

    var string_param= req.query.queryparam;
    if(string_param==null)                  //if queryparam is null then go to _get
    {
        const _get=require('./get')
        router.get('/', _get)
    }
    else if(cluster_values.has(string_param))
    {             
        var queries=cluster_values.get(string_param)
        var cluster=""
        var results=[]
        for(var i=1;i<=Object.keys(queries).length;i++)
            cluster=cluster+`select * from contribution where message like '%${queries[i]}%' order by creation_date desc;\n`;

        connection.query(cluster,function(err,result,fields)
        {
            if(err) throw err;
            for(j=0;j<result.length;j++)
            {
                for(k=0;k<result[j].length;k++)
                    results.push(JSON.parse(JSON.stringify(result[j][k])))
            }
            response=paginate(req, results) 
            res.send(response)
        })
    }
    else                                        //if not found in clusters then run basic search query
    {
        connection.query("select * from contribution where contributor_name like '%"+string_param+"%' or message like '%"+string_param+"%' order by creation_date desc",function(err,result){
            if(err) throw err;
            else
            {
                response=paginate(req, result)
                res.send(response);
            }
        });

    }
}

module.exports = _find;

