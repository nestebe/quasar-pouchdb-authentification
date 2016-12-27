<template>
    <div>
        <div class="layout-padding">
            <div class="card">
                <div class="card-title">
                    Inscription
                </div>
                <div class="card-content">
                    <div class="floating-label">
                        <input required class="full-width">
                        <label>Identifiant</label>
                    </div>
                    <div class="floating-label">
                        <input type="password" required class="full-width">
                        <label>Mot de passe</label>
                    </div>
                    <button class="primary" @click="sign()">
                     Valider
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-authentication'));
    var db = new PouchDB('http://127.0.0.1:15984/test', { skipSetup: true });
    export default {
        data() {
            return {
                login: '',
                password: ''
            }
        },
        methods: {
            sign() {
                console.log("sign");
                db.login('batman', 'brucewayne').then(function (batman) {
                    console.log("I'm Batman.");
					console.log(db.allDocs());
                    return db.allDocs();
                });
            }

        }
    }
</script>