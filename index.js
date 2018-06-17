var express = require('express');
var app = express();
var cors = require('cors');
var people= require('./people');
require('dotenv').config();

app.use(cors());
app.use('/',people);

app.listen(process.env.PORT, () => console.log("The server has started!!"));
