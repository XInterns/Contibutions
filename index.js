var express = require('express');
var cors=require('cors')
var people=require('./people')

var app = express();

app.use(cors())
app.use('/', people)

app.listen(process.env.PORT||5000, function () {
   console.log("server has started!!!")
}); 