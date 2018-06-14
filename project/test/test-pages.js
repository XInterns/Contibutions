var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:5000/search/d' , function(error, response, body) {
        expect(body).to.equal;
        done();
    });
});