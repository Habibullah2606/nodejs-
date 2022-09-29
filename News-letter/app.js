const express = require('express')
const request = require('request')
const body_parser = require('body-parser')
const https = require('https')
const { url } = require('inspector')
const qs = require('qs')
const app = express()

// CSS styles are on the static files so to render that on the localhose we have to use thhe below caode
app.use(express.static("public"))
app.use(body_parser.urlencoded({ extended: true }));// to have the form the form information in the req.body of the post
app.get('/', function (req, res) {
    res.sendFile(__dirname + "\\signup.html")
})
app.post('/', function (req, res) {
    // add methot = post in the html form and action as the route which you are using
    var a = req.body.userName;
    var b = req.body.password;
    console.log("thanks for the login " + a + " your password is " + b);
    const URL = 'https://accounts.eu1.gigya.com/accounts.search?apikey=3_f7T4LFA0qRiYrULskmCd9ndQmfE5bQ4DYJCHRiaz-eb2bi1t5eIP8CnOvZujsH7P&secret=gEvIQUSoDbv8Xo03mzaXFPii4yNkX86F&userKey=AJ4j4lO9K5tM';
    const options = {

        method: "GET",

       

        data: qs.stringify({

            query: `SELECT profile.phones.number FROM accounts WHERE profile.username = '${req.body.userName}'`,

        }),

        headers: {

            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'

        }

    };
    https.request(URL,options, function (response) {
        response.on("data",function(data){
            
            
            console.log(JSON.parse(data));
            
        })
       
    })
})
app.listen(3000, function () {
    console.log("Server started at localhost:3000");
});