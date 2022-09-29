const express = require("express");

const app = express();
// to have something to display on the browser when you hit  a local host
app.get('/', function (request, response) {
    
    response.send('Habibullah Z');// to send some data as a response to the browser wneh we run localhost:3000 in 
    console.log(request);
});// home route
app.get('/about',function(req,res){
    res.send('This is my first server and it is owned by Habibullah  Z');
    console.log(req);
});// about route
//http local host(listening to the local host 3000 channel)
app.listen(3000, function () {
    console.log("server started");
});



