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


    //{ path: '*', component: load('Error404') }, // Not found
    { name: 'index', path: '/', component: load('index') },
    { name: 'login', path: '/auth/login', component: load('auth/login') },
    { name: 'logout', path: '/auth/logout', component: load('auth/logout') },
    { name: 'register', path: '/auth/register', component: load('auth/register') },

    { name: 'error404', path: '/error404', component: load('error404') },
    {
      name: "layout",
      path: '/layout',
      component: load('layouts/layout'),
      children: [
        { path: '', component: load('layouts/about') },
        { path: 'items', component: load('layouts/items') },
        { path: 'syncdata', component: load('layouts/syncdata') }
      ]
    }
  ]
})
