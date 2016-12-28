<template>

</template>

<script>
  import auth from '../../auth'

  export default {
    created(){auth.logout();}
  }
</script>