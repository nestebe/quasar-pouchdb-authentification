// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import Ressouces from 'vue-resource'
import auth from 'auth'
Vue.use(Quasar) // Install Quasar Framework
Vue.use(Ressouces)


Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App')),
    created: function(){
      if(auth.checkAuth()){
        router.replace("/layout");
      }else{
        router.replace("/");
      }
  },
  destroyed: function(){
    console.log("DESTROYED mainJS");
  }
  })
})
