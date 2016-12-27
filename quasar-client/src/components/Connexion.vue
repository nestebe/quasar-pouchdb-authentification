<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="card-title">
          Connexion
        </div>
        <div class="card-content">
          <div class="floating-label">
            <input required v-model="login" class="full-width">
            <label>Identifiant</label>
          </div>
          <div class="floating-label orange">
            <input v-model="password" type="password" required class="full-width">
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
		this.$router.push('/login');
      }

    }
  }
</script>