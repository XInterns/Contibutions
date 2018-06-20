var techwords = require('./tagwords');
var HashMap = require('hashmap');

var map = new HashMap();
var techcount = [];

for (let iterator = 0; iterator < stop_words.length; iterator++) {
    map.set(stop_words[iterator].toLowerCase(), "1");
}
var wordcount=new HashMap();

var tech_word;

 const _tag = (req, res) => {
   
   const connection=req.app.get('sql-connection');
     var msg = "SELECT mesage FROM info";
        var count;
        connection.query("SELECT COUNT(mesage) FROM info", function (err, result, fields) {
            count = result[0]['COUNT(mesage)'];
            count = parseInt(count);

        });

        connection.query(msg, function (err, result, fields) {
            if (err) throw err;
         
            wordcount.clear();
             var index = 0;
            tech_word = '';
            
            for (let outer = 0; outer < count; outer++) {
                for (let inner = 0; j < result[outer]['mesage'].length; inner++) {
                    

      if (result[outer]['mesage'][inner] == ' '||result[outer]['mesage'][inner] == '\n'||result[outer]['mesage'][inner] == '\r'||    result[outer]['mesage'][inner] == '0' ||result[outer]['mesage'][inner] == '1' ||result[outer]['mesage'][inner] == '2' ||result[outer]['mesage'][inner] == '3' ||result[outer]['mesage'][inner] == '4' ||result[outer]['mesage'][inner] == '5' ||result[outer]['mesage'][inner] == '6' ||result[outer]['mesage'][inner] == '7' ||result[outer]['mesage'][inner] == '8' ||result[outer]['mesage'][inner] == '9' ||result[outer]['mesage'][inner] == '-'||result[outer]['mesage'][inner] == '!'||result[outer]['mesage'][inner] == '#'||result[outer]['mesage'][inner] == '/'||result[outer]['mesage'][inner] == ':'|| result[outer]['mesage'][inner] == ',' || result[outer]['mesage'][inner] == '"' || result[outer]['mesage'][inner] == '(' || result[outer]['mesage'][inner] == ')' || result[outer]['mesage'][inner] == '.') {
                           
                        if (!map.has(tech_word)) {
                            
                            techwords[index++] = tech_word;
                               tech_word=tech_word.charAt(0).toUpperCase()+tech_word.slice(1);

                            if(!wordcount.has(tech_word))
                            {
                                wordcount.set(tech_word,1);
                            }
                            else{
                                var countword=wordcount.get(tech_word);
                                countword++;
                                wordcount.set(tech_word,countword);
                            }
                        }
                        tech_word = '';
                       
                    }
                    else {
                        tech_word += result[outer]['mesage'][inner].toLowerCase();
                    }
                }
            }
           
        });
                        
        var array=[];
        wordcount.forEach(function(value, key) {
            array.push({
                name :key ,
                value: value
            });
        });
       
        var sorted= array.sort(function(a,b){
            return((a.value<b.value)?1:(b.value<a.value)?-1:0);
        });
        res.send(sorted.slice(0,30);
      
    };

    
 

 module.exports = _tag;
