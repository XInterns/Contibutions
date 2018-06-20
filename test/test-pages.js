var expect  = require('chai').expect;
var request = require('request');
var assert = require('chai').assert;
var baseURL = "http://192.168.3.158:5000/"

describe("API test", function(){
    //To check the output is returned as a JSON Object
    it('Check json objects are returned',function(done){
        request(baseURL , function(error, response, body){
            //console.log(body);
            assert(JSON.parse(body), "Converted to JSON")
            done();
        });
    });



    //To check the query returns some elements that are not  null
    it('GET /', function(done) {        
        request(baseURL, function(error, response, body) {
            let result = JSON.parse(body);
            expect(body).to.have.length.greaterThan(0);
            done();
        });
    });

    //To check the query parameter is contained in the result object
    it('GET /search',function(done){
        request({url :baseURL + 'search?queryparam=xebia'}, function(error, response, body){
            let result = JSON.parse(body);
            expect(body).to.contain('xebia');
            done();
        });
    });

   
});
