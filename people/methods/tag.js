var stop_words = require('./tagwords');
var HashMap = require('hashmap');

var map = new HashMap();

var techwords=[];

for (let iterator = 0; iterator < stop_words.length; iterator++) {
    map.set(stop_words[iterator].toLowerCase(), "1");
}
var wordcount=new HashMap();

var tech_word;

 const _tag = (req, res) => {
   
   const connection=req.app.get('sql-connection');
     var msg = "SELECT message FROM Contribution";
        var count;
        connection.query("SELECT COUNT(message) FROM Contribution", function (err, result, fields) {
            count = result[0]['COUNT(message)'];
            count = parseInt(count);

        });

        connection.query(msg, function (err, result, fields) {
            if (err) throw err;
         
            wordcount.clear();
             var index = 0;
            tech_word = '';
            
            for (let outer = 0; outer < count; outer++) {
                for (let inner = 0; inner < result[outer]['message'].length; inner++) {
                    

      if (result[outer]['message'][inner] == ' '||result[outer]['message'][inner] == '\n'||result[outer]['message'][inner] == '\r'||    result[outer]['message'][inner] == '0' ||result[outer]['message'][inner] == '1' ||result[outer]['message'][inner] == '2' ||result[outer]['message'][inner] == '3' ||result[outer]['message'][inner] == '4' ||result[outer]['message'][inner] == '5' ||result[outer]['message'][inner] == '6' ||result[outer]['message'][inner] == '7' ||result[outer]['message'][inner] == '8' ||result[outer]['message'][inner] == '9' ||result[outer]['message'][inner] == '-'||result[outer]['message'][inner] == '!'||result[outer]['message'][inner] == '#'||result[outer]['message'][inner] == '/'||result[outer]['message'][inner] == ':'|| result[outer]['message'][inner] == ',' || result[outer]['message'][inner] == '"' || result[outer]['message'][inner] == '(' || result[outer]['message'][inner] == ')' || result[outer]['message'][inner] == '.') {
                           
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
                        tech_word += result[outer]['message'][inner].toLowerCase();
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
