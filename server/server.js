const express = require('express');
const parrot = require('parrot-middleware')
const scenarios =require('./scenarios');
 
const app = express();
 
app.use(parrot(scenarios));
 
app.listen(3001,function(){
    console.log("server started")
});