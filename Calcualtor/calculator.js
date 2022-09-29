var express = require('express');
var parser = require('body-parser');
var app = express()

app.use(parser.urlencoded({extended:true}));// to have the form the form information in the req.body of the post

app.get('/',function(req,res){
    res.sendFile(__dirname+'\\index.html'); // making the index.html file to display in the the browser wen you run
});
app.post('/',function(req,res){
    var a = parseInt(req.body.num1);
    var b = parseInt(req.body.num2);
    var c = (a)+(b);
    res.send('the addition is '+c);
});
app.listen(3210,function(){
    console.log('server 3210 started');
});