var expect  = require('chai').expect;
var request = require('request');
var assert = require('chai').assert;
var baseURL = "http://192.168.2.212:7000/tag"

describe("API test", function(){
 
    
    //Testcases for Tags

    //Checking if 30 tags are returned
    it('Tags returned =30',function(done){
     
        request(baseURL, function(error, response, body) {
            console.log(typeof(body));
            let result = JSON.parse(body);
            expect(result).length(30);
            done();
        });
    });

    //Checking if tag has two parameters/keys
    it('Tags parameters =2',function(done){
     
        request(baseURL, function(error, response, body) {
            console.log(typeof(body));
            let result = JSON.parse(body);
            expect(Object.keys(result[0]).length==2);
            done();
        });
    });

    // on clicking a tag the response body shouldnt be null 
    it('On clicking the tag,response != null',function(done){
     
        request(baseURL, function(error, response, body) {
            console.log(typeof(body));
            let result = JSON.parse(body);
            expect(body).to.have.length.greaterThan(0);
            done();
        });
    });

     

});