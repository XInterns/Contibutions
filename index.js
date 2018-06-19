var express = require('express');
var app = express();
var connection = require('./people/methods/dbConnection')

var cors = require('cors');
var people= require('./people');



// require('dotenv').config();

app.set('sql-connection',connection);

app.use(cors());
app.use('/',people);

app.listen(process.env.PORT||5000, function () {
    console.log("server has started!!!")});	
