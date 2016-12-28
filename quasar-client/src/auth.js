import Vue from 'vue'
import Router from './router'
import { Toast, LocalStorage } from 'quasar'
var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-authentication'));
var CryptoJS = require("crypto-js");
const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'authenticate'
const SIGNUP_URL = API_URL + 'signup'
const USER_URL = API_URL + 'authenticate/user'

export default {

    user: {
        authenticated: false,
        login: '',
        password: ''
    },
    login(context, creds, redirect) {
        var hash = CryptoJS.SHA1(creds.email);
        console.log("hash: " + hash);
        var url = 'http://' + creds.email + ':' + creds.password + '@localhost:15984/' + hash.toString();
        console.log(url);
        var db = new PouchDB(url, { skip_setup: true });

        this.user.authenticated = true;
        this.user.login = creds.email;
        this.user.password = creds.password;

        var saveUser = this.user;
        db.info().then(function (result) {
            // handle result
            console.log("result: ", result);
            console.log(saveUser);
          //  Toast.create.positive("Success !");
            LocalStorage.set('user', saveUser);
            var r = LocalStorage.get.item('user');
            Router.replace(redirect);
        }).catch(function (err) {
            console.log(err);
            Toast.create.negative("Error !");
        });


        /*   db.allDocs({
               include_docs: true,
               attachments: true
           }).then(function (result) {
               // handle result
               console.log(result.rows);
           }).catch(function (err) {
               console.log(err);
           });/*
   
           /*      context.$http.post(LOGIN_URL, creds).then((response) => {
                     LocalStorage.set('id_token', response.json().token)
         
                     this.user.authenticated = true
                     Vue.http.headers.common['Authorization'] = 'Bearer ' + LocalStorage.get.item('id_token')
                     this.getAuthUser(context)
         
                     if (redirect) {
                         Router.replace(redirect)
                     }
                 }, (response) => {
                     Toast.create.negative(response.json().error)
                 })*/
    },

    signup(context, creds, redirect) {
        console.log(SIGNUP_URL);


        context.$http.post(SIGNUP_URL, creds).then((response) => {

            if (redirect) {
                this.user.authenticated = true;
                Router.replace(redirect)
            } else {
                Toast.create.negative('Something went wrong!');
            }
            console.log(response);
        })





        /* context.$http.post(SIGNUP_URL, creds).then((response) => {
           LocalStorage.set('id_token', response.json().token)
     
           this.user.authenticated = true
           Vue.http.headers.common['Authorization'] = 'Bearer ' + LocalStorage.get.item('id_token')
           this.getAuthUser(context)
     
           if (redirect) {
             Router.replace(redirect)
           }
         }, (response) => {
           Toast.create.negative(response.json().error)
         })*/
    },

    logout() {
        LocalStorage.clear()
        this.user.authenticated = false
    },

    checkAuth() {
        var jwt = LocalStorage.get.item('id_token')

        if (jwt) {
            this.user.authenticated = true
            Vue.http.headers.common['Authorization'] = 'Bearer ' + jwt
        }
        else {
            this.user.authenticated = false
        }
    },

    getAuthUser(context) {
        context.$http.get(USER_URL).then((response) => {
            console.log(response.json())
            LocalStorage.set('user', response.json())
        }, (response) => {
            Toast.create.negative('Something went wrong!')
        })
    }
}