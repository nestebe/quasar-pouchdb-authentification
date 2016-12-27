var express = require('express');
var app = express();
var unirest = require('unirest');
var bodyParser = require('body-parser');
var BASE_URL = "http://admin:admin@localhost:15984";
var CryptoJS = require("crypto-js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('v1.0.0');
});

function createUser(user, callback) {
  var req = unirest("PUT", BASE_URL + "/_users/org.couchdb.user:" + user.email);
  var hash = CryptoJS.SHA1(user.email);
  console.log("hash: " + hash);
  req.headers({
    "cache-control": "no-cache",
    "content-type": "application/json",
  });

  req.type("json");
  req.send({
    "_id": "org.couchdb.user:" + user.email,
    "name": "" + user.email,
    "base": "" + hash.toString(),
    "roles": [],
    "type": "user",
    "password": user.password
  });

  req.end(function (res) {
    if (res.error) { console.log(res.error); }
    console.log(res.body);

    callback(hash);

  });

};

function createBase(baseName, callback) {
  console.log("createBase");
  var req = unirest("PUT", BASE_URL + "/" + baseName);
  console.log(req);

  req.headers({
    "cache-control": "no-cache",
    "content-type": "application/json",
  });


  req.end(function (res) {
    if (res.error) { console.log(res.error); }
    console.log(res.body);
    callback();
  });


};

function createAccess(baseName, username, callback) {
  console.log("createAccess");

  var req = unirest("PUT", BASE_URL + "/" + baseName + "/_security");

  req.headers({
    "cache-control": "no-cache",
    "content-type": "application/json",
  });

  req.type("json");
  req.send({
    "admins": {
      "names": [],
      "roles": []
    },
    "members": {
      "names": [
        username
      ],
      "roles": []
    }
  });

  req.end(function (res) {
    if (res.error) { console.log(res.error); };
    console.log(res.body);
  });

  callback();
};


app.post('/signup', function (req, res) {

  var name = req.body.name;
  var email = req.body.name;
  var password = req.body.password;


  createUser(req.body, function (hash) {
    console.log("createUser ok");
    createBase(hash, function () {
      createAccess(hash,email , function () { console.log("finish"); })
    });
  });
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ name: name }));


});

app.post('/create', function (req, res) {

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