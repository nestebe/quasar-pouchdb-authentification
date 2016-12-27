var express = require('express');
var app = express();
var unirest = require('unirest');


app.get('/', function(req, res){
  res.send('hello world');
});


app.get('/create', function(req, res){

var req = unirest("PUT", "http://admin:admin@localhost:15984/_users/org.couchdb.user:test");

req.headers({
  "cache-control": "no-cache",
  "content-type": "application/json",
});

req.type("json");
req.send({
  "_id": "org.couchdb.user:metest2",
  "name": "metest2",
  "roles": [],
  "type": "user",
  "password": "pwd"
});

req.end(function (res) {
  //if (res.error) throw new Error(res.error);
console.log(res.error);
  console.log(res.body);
});

});
console.log("listen on localhost:3000 ");
app.listen(3000);