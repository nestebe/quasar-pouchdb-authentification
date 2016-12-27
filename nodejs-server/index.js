var express = require('express');
var app = express();
var unirest = require('unirest');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.get('/', function(req, res){
  res.send('hello world');
});
app.post('/create', function(req, res){
	
	var name = req.body.name;
	console.log(name);
	res.send(name);
	
});

app.post('/create', function(req, res){

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