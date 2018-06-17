var techwords=[ "Access" ,"Account", "Android" ,"Archive" , "Artifical" ,"Application" ,"blog" ,
    "Bit" ,"Bandwidth" ,"Bluetooth" , "Bios" ,"Broadband" ,"CAD" ,"cache" ,"CD" ,"Code" ,
    "Cloud" ,"Compilation" ,"Connection" ,"Cookies" ,"Copyright" ,"Cyberspace","Cybersecurity",
    "Daemon" ,"Data" ,"Database" ,"Debug" ,"Decipher" ,"DevOps" ,"digital" ,"Docker" ,
    "Email" ,"Ethernet" , "Express" ,"encryption" ,"Facebook" ,"Fax" ,"File" ,"Film",
    "Firewall" ,"Font" ,"Graphics" ,"Git" ,"Grid" ,"Hacker" ,"Host" ,"Hypertext" ,
    "Internet" ,"Interface" ,"Intranet" ,"ipad" ,"job" ,"javascript" ,"js" ,"Jenkins" ,
    "laptop" ,"LAN" ,"link" , "mainframe" ,"matrix" ,"media" ,"memory" ,"message" , "method" ,
    "mongoDB" ,"ML" ,"machine" ,"learning" ,"MYSQL" ,"modem" ,"monitor" ,"network" ,"node" ,
    "OS" ,"password" , "pixel" ,"php" ,"privacy" ,"project" ,"protocol" ,"quality" , "query" ,
    "queue" ,"radio" ,"router" , "rate" ,"Technology" ,"Satellite" ,"scan" ,"Selenium" ,"Skype" ,
    "smartphone" , "script" ,"terminal" ,"tablet" ,"tagging" ,"tracking" ,"tools" ,"Terminal" ,
    "URL","virus" ,"video" ,"virtual" ,"virus" ,"visual" ,"Web" ,"windows" ,"Wiki" ,"word" ,
    "Zombie",
];

var mysql = require('mysql');
var cors = require('cors');
var express = require('express');
var app = express();
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "interns"
});

con.connect(function (err) {
  if (err) console.log(err);
});

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

// app.get('/tag', function(req,res){
  
//     for( let i=0;i<techwords.length;i++)
//     {   
//        // var count= "SELECT COUNT(msg) FROM info where msg like '%"+techwords[i]+"%'";
//        var count= "SELECT COUNT(msg) FROM info where msg like '%"+techwords[i]+"%'";
//         // techcount[i]=count;
//          con.query(count, function (err, result, fields) {
//             if (err) throw err;
//             //setTimeout(()=>{techcount[i]=parseInt(result[0]['COUNT(msg)']);},1000);
//            // techwords[i][1]=parseInt(result[0]['COUNT(msg)']);
//            for(let j=0;j<100000;j++)
//            {;}
//          techcount[i]=parseInt(result[0]['COUNT(msg)']);
            
//     });  
//      }
     
//     sort(techcount);
//  for( let i =0;i<10;i++)
//      {
//          console.log(techwords[i]+" "+techcount[i]);
        
//     }
//     console.log('\n');
//     res.send(techwords);
//  });



 const _tag = (req, res) => {

    for( let i=0;i<techwords.length;i++)
    {   
       // var count= "SELECT COUNT(msg) FROM info where msg like '%"+techwords[i]+"%'";
       var count= "SELECT COUNT(message) FROM Contribution where message like '%"+techwords[i]+"%'";
        // techcount[i]=count;
         con.query(count, function (err, result, fields) {
            if (err) throw err;
            //setTimeout(()=>{techcount[i]=parseInt(result[0]['COUNT(msg)']);},1000);
           // techwords[i][1]=parseInt(result[0]['COUNT(msg)']);
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
    console.log('\n');
    res.send(techwords);
     
 };

 module.exports = _tag;