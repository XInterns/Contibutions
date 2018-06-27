var stop_words = require('./tagwords');
var HashMap = require('hashmap');
var express=require('express')
var app=express();

var map = new HashMap();

var techwords=[];

for (let iterator = 0; iterator < stop_words.length; iterator++) {
    map.set(stop_words[iterator].toLowerCase(), "1");
}
var tagwords=new HashMap();

var tech_word;
//return the count of messages
const getCountOfMessages = (req) => new Promise((resolve, reject) => {
    const connection = req.app.get('sql-connection');
    connection.query("SELECT COUNT(message) FROM Contributions", function (err, result, fields) {
        if (err) return resolve(0);
        count = result[0]['COUNT(message)'];
        count = parseInt(count);
        return resolve(count);
    });
});
//return all the messages
const getMessagesFromKeywords = (count, req) => new Promise((resolve, reject) => {
    const connection = req.app.get('sql-connection');
    var message = "SELECT message FROM Contributions";
    connection.query(message, function (err, result, fields) {
        if (err) {
            return reject(err);
            throw err
        };
        
        tagwords.clear();
         var next_word = 0; let c = 0;
        tech_word = '';
        for (let outer = 0; outer < count; outer++) {
            for (let inner = 0; inner < result[outer]['message'].length; inner++) {
                if (result[outer]['message'][inner] == ' ' || result[outer]['message'][inner] == '\n' || result[outer]['message'][inner] == '\r' || result[outer]['message'][inner] == '0' || result[outer]['message'][inner] == '1' || result[outer]['message'][inner] == '2' || result[outer]['message'][inner] == '3' || result[outer]['message'][inner] == '4' || result[outer]['message'][inner] == '5' || result[outer]['message'][inner] == '6' || result[outer]['message'][inner] == '7' || result[outer]['message'][inner] == '8' || result[outer]['message'][inner] == '9' || result[outer]['message'][inner] == '-' || result[outer]['message'][inner] == '!' || result[outer]['message'][inner] == '#' || result[outer]['message'][inner] == '/' || result[outer]['message'][inner] == ':' || result[outer]['message'][inner] == ',' || result[outer]['message'][inner] == '"' || result[outer]['message'][inner] == '(' || result[outer]['message'][inner] == ')' || result[outer]['message'][inner] == '.' || result[outer]['message'][inner] == '–' || result[outer]['message'][inner] == '—') {

                   if (!map.has(tech_word)) {

                        techwords[next_word++] = tech_word;

                        tech_word = tech_word.charAt(0).toUpperCase() + tech_word.slice(1);

                        if (!tagwords.has(tech_word)) {
                         
                            tagwords.set(tech_word, 1);
                        }
                        else {

                            var a = tagwords.get(tech_word);
                            a++;
                            tagwords.set(tech_word, a);
                            
                        }
                    }
                    
                    tech_word = '';
                }
                else {

                    tech_word += result[outer]['message'][inner].toLowerCase();
                }
            }
        }
        return resolve(result)
       
    });
})

//Find all the tag words 
 const _tag = (req, res) => {
   
   getCountOfMessages(req).then((countOfMessages) => {
        return getMessagesFromKeywords(countOfMessages, req)
    }).then(() => {
        for (let outer = 0; outer < techwords.length; outer++) {
            if (!Number.isInteger(parseInt(techwords[outer])) && techwords[outer] != ' ' && techwords[outer] != '&' && techwords[outer].length < 12) {
                if (tagwords.get(techwords[outer]) == false) {
                    tagwords.set(techwords, 1);
                }
                else {

                    tagwords[techwords]++;
                }
            }
        }
        
        var array = [];
        tagwords.forEach(function (value, key) {
            array.push({
                name: key,
                value: value
            });
        });
        
        var sorted = array.sort(function (a, b) {
            return ((a.value < b.value) ? 1 : (b.value < a.value) ? -1 : 0);
        })
       
        res.send(sorted.slice(0, 100));
    });

    };

module.exports = _tag;
