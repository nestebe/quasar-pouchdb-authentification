import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      name:'dashboard', path: '/', component: load('dashboard'),
      children: [
        { path: 'connexion', component: load('Connexion') },
        { path: 'inscription', component: load('Inscription') },
      ]
    },
    //{ path: '*', component: load('Error404') }, // Not found
	 { name:'login', path: '/auth/login', component: load('auth/login') },
	 { name:'register', path: '/auth/register', component: load('auth/register') }
  ]
})
