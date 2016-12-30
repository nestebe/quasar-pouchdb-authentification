import Vue from 'vue'
import Router from './router'
import { Toast, LocalStorage, Loading } from 'quasar'

//API
const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'authenticate'
const SIGNUP_URL = API_URL + 'signup'
const USER_URL = API_URL + 'authenticate/user'
//COUCHDB
const DB_BASE = 'localhost:15984'
var PouchDB = require('pouchdb');
var CryptoJS = require("crypto-js");


export default {

    user: {
        authenticated: false,
        login: '',
        password: '',
        remotedb: ''
    },

    login(context, creds, redirect) {
        Loading.show();
        LocalStorage.clear();
        //generate database name (hash) with email
        var hash = CryptoJS.SHA1(creds.email);
        var url = 'http://' + encodeURIComponent(creds.email) + ':' + creds.password + '@' + DB_BASE + '/' + hash.toString();
        var db = new PouchDB(url, { skip_setup: true });

        this.user.authenticated = true;
        this.user.login = creds.email;
        this.user.password = creds.password;
        this.user.remotedb = url;
        var saveUser = this.user;

        db.info().then(function (result) {
            LocalStorage.set('user', saveUser);
            var r = LocalStorage.get.item('user');
            console.log("connexion success !");
            Loading.hide();
            Router.replace("/layout");
        }).catch(function (err) {
            console.log(err);
            Loading.hide();
            Toast.create.negative("Login Error !");
        });
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
    },

    logout() {
        LocalStorage.clear()
        this.user.authenticated = false
        Router.replace("/");
    },

    checkAuth() {
        var userAuth = LocalStorage.get.item('user');
        if (userAuth) {
            if (userAuth.authenticated) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },

    getUser() {
        var localUser = LocalStorage.get.item('user');
        return localUser;
    }


}