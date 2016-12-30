<template>

  <div>
    <div class="layout-padding">

  <div class="list">
    <div class="item" v-for="data in list">
      <div class="item-content">
        {{data.id}}
      </div>
    </div>
  </div>

  </div>
    </div>
</template>
<script>
  var PouchDB = require('pouchdb');
  import auth from '../../auth';
  export default {
    data() {
      return {
        list: [],
      }
    },
    created() {

    //  var remotedb = auth.getUser().remotedb;
    //  console.log(remotedb);
      var db = new PouchDB("localDB");
      db.allDocs({include_docs: true}).then(function (result) {
        

        // handle result
        console.log(result.rows);
        return result.rows;
        //   this.items.push(result.rows[0]);
      }).then(function (response) {
        console.log(response);
        this.list = response;

      }.bind(this)).catch(function (err) {
        console.error(err);
      });
    }
  }
</script>