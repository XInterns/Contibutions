var techwords = require('./tagwords');
var con = require('./dbConnection');
var techcount=[];

var map = new HashMap();
var techcount = [];

for (let i = 0; i < stop_words.length; i++) {
    map.set(stop_words[i], "1");
}
var mp=new HashMap();


 const _tag = (req, res) => {

  var msg = "SELECT msg FROM info";
        var count;
        con.query("SELECT COUNT(msg) FROM info", function (err, result, fields) {
            count = result[0]['COUNT(msg)'];
            count = parseInt(count);

        });

        con.query(msg, function (err, result, fields) {
            if (err) throw err;
         
            mp.clear();
            let k = 0; var l = 0; let c = 0;
            tech_word = '';
            for (let i = 0; i < count; i++) {
                for (let j = 0; j < result[i]['msg'].length; j++) {
                    

      if (result[i]['msg'][j] == ' '||result[i]['msg'][j] == '\n'||result[i]['msg'][j] == '\r'||    result[i]['msg'][j] == '0' ||result[i]['msg'][j] == '1' ||result[i]['msg'][j] == '2' ||result[i]['msg'][j] == '3' ||result[i]['msg'][j] == '4' ||result[i]['msg'][j] == '5' ||result[i]['msg'][j] == '6' ||result[i]['msg'][j] == '7' ||result[i]['msg'][j] == '8' ||result[i]['msg'][j] == '9' ||result[i]['msg'][j] == '-'||result[i]['msg'][j] == '!'||result[i]['msg'][j] == '#'||result[i]['msg'][j] == '/'||result[i]['msg'][j] == ':'|| result[i]['msg'][j] == ',' || result[i]['msg'][j] == '"' || result[i]['msg'][j] == '(' || result[i]['msg'][j] == ')' || result[i]['msg'][j] == '.') {
                           
                        if (!map.has(tech_word)) {
                            
                            techwords[l++] = tech_word;

                            if(!mp.has(tech_word))
                            {
                                mp.set(tech_word,1);
                            }
                            else{
                                var a=mp.get(tech_word);
                                a++;
                                mp.set(tech_word,a);
                            }
                        }
                        tech_word = '';
                       
                    }
                    else {
                        tech_word += result[i]['msg'][j];
                    }
                }
            }
           
        });
                        
        var array=[];
        mp.forEach(function(value, key) {
            array.push({
                name :key ,
                value: value
            });
        });
       
        var sorted= array.sort(function(a,b){
            return((a.value<b.value)?1:(b.value<a.value)?-1:0);
        })
        res.send(sorted);
      
    });

    
 };

 module.exports = _tag;
