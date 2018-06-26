const natural = require('natural');
const wordnet = new natural.WordNet();
var paginate=require('./paginate')
const express = require('express');
const router = express.Router();
const cluster_values= require('./clusters')

var flag=0;
const _find = ( req, res) => {
    const connection = req.app.get('sql-connection');

    var string_param= req.query.queryparam;
    if(string_param==null)                  //if queryparam is null then go to _get
    {
        const _get=require('./get')
        flag=1;
        router.get('/', _get)
    }
    else if(cluster_values.has(string_param))
    {             
        var queries=cluster_values.get(string_param)
        var cluster=""
        var results=[]
        for(var i=1;i<=Object.keys(queries).length;i++)
            cluster=cluster+`select * from info where mesage like '%${queries[i]}%' order by creation_date desc;\n`;

        connection.query(cluster,function(err,result,fields)
        {
            if(err) throw err;
            for(j=0;j<result.length;j++)
            {
                for(k=0;k<result[j].length;k++)
                    results.push(JSON.parse(JSON.stringify(result[j][k])))
            }
            response=paginate(req, results) 
            flag =1;
            res.send(response)
        })
    }
 
    else if(flag==0)                                       
    {
        flag=1;
        var k; var o={};
        wordnet.lookup(param, function(details) 
       {  
    
          console.log("Synonyms: " + details[0].synonyms);
          var synonyms=details[0].synonyms;
          var c=1;  
          for(var i=0;i<synonyms.length;i++)
          {
           
             cluster_values.forEach(function(value,key1){ 
             var obj2=m1.get(key1);
       
             Object.keys(obj2).forEach(function(key) {
             
             if (obj2[key] == synonyms[i]&& c==1) {
            
                
                  console.log(key);
                  console.log(key1);
                  console.log(synonyms[i]);
                  obj2[key-'0'+1]=param;
                  o=obj2;
                  console.log(obj2);
                  m1.set(key1,obj2);
                  console.log(JSON.stringify((m1)));
                  c=0;
              
            }
          }); 

           
                      
        });
        if(i==synonyms.length-1)  //on the second last query, run the basic search for the entered keyword
        {
            connection.query("select * from info where contributor_name like '%"+string_param+"%' or mesage like '%"+string_param+"%' order by creation_date desc",function(err,result){
                if(err) throw err;
                else
                {
                    response=paginate(req, result)
                
                    res.send(response);
                }
            });
        }
    }
    
    }); //wordnet.lookup


    }
    
}

module.exports = _find;

