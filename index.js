'use strict'

let mongoose = require("mongoose");
let app = require('./app');
let port = 3900;

mongoose.set('useFindAndModify',true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_first_crud',{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{
    console.log("Connection successful");
    app.listen(port,()=>{
        console.log("Server running on http://localhost:"+port);
    });
});