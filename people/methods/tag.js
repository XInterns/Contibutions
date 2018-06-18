var techwords = require('./tagwords');
var con = require('./dbConnection');
var techcount=[];

const sort= (techcount)=>{
    for(let i=0;i<techcount.length;i++)
    {
        for(let j=i+1;j<techcount.length;j++)
        {
            if(techcount[i]<techcount[j])
            {
                const temp= techcount[i];
                techcount[i]=techcount[j];
                techcount[j]=temp;
               
                const t= techwords[i];
                techwords[i]=techwords[j];
                techwords[j]=t;
               
            }
        }
    }
}
 const _tag = (req, res) => {

    for( let i=0;i<techwords.length;i++)
    {  
      
       var count= "SELECT COUNT(message) FROM Contribution where message like '%"+techwords[i]+"%'";
       
         con.query(count, function (err, result, fields) {
          
           for(let j=0;j<100000;j++)
           {;}
         techcount[i]=parseInt(result[0]['COUNT(message)']);
           
    }); 
     }
    
    sort(techcount);
 for( let i =0;i<10;i++)
     {
         console.log(techwords[i]+" "+techcount[i]);
       
    }
  
    res.send(techwords);
    
 };

 module.exports = _tag;
