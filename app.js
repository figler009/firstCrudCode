'use strict'
//Load Modules to server
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

//
let smartphone_routes = require('./routes/smartPhoneRouter');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorizarion, X-API-KEY, Origin,X-Requested-With, Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Method','GET,POST,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});

//Routes
 app.use('/api',smartphone_routes);

//Export modules;
module.exports = app;