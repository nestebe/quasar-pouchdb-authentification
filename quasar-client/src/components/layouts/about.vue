<template>
  <div>
    <div class="layout-padding">
      <p class="caption">Informations</p>
      <div class="list item-inset-delimiter">
        <div class="item">
          <i class="item-primary">assignment_ind</i>
          <div class="item-content">{{user.email}}</div>
        </div>

             <div class="item">
             <i  class="item-primary">storage</i>
          <div style="font-size: 12px;" class="item-content">{{user.remotedb}}</div>
               </div>
         <div class="item">
             <i class="item-primary">vpn_key</i>
          <div class="item-content">{{user.password}}</div>
               </div>
        </div>
        

</div>
    </div>
  </div>
</template>

<script>
  import auth from '../../auth'

  export default {
    data () {
      return {
        user: {
          email: '',
          remotedb: '', 
          password: ''
        },
        message:auth.getUser().email
      }
    },
    methods: {
   
    },
    created(){
      console.log("ready !");
     var localUser = auth.getUser();
     console.log(localUser);

     this.user.email = localUser.login;
     this.user.remotedb = localUser.remotedb;
     this.user.password = localUser.password;
    }
  }
</script>