<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        Quasar Layout
      </q-toolbar-title>
      <button @click="$refs.rightDrawer.open()">
        <i>assignment</i>
      </button>
    </div>

    <div slot="header" class="toolbar">
      <q-search :model.sync="search" ></q-search>
    </div>



    <q-drawer ref="leftDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
            Menu
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="view_quilt" to="connexion">
         Connexion
        </q-drawer-link>
        <hr>
        <div class="list-label">Layout Components</div>
        <q-drawer-link icon="sign" to="inscription">
         Inscription
        </q-drawer-link>
        <q-drawer-link icon="tab" to="/showcase/layout/tabs">
          Tabs
        </q-drawer-link>
        <q-drawer-link icon="compare_arrows" to="/showcase/layout/drawer">
          Layout Drawer
        </q-drawer-link>
      </div>
    </q-drawer>

    <router-view class="layout-view"></router-view>

    <q-drawer right-side swipe-only ref="rightDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
            Right-side Drawer
        </q-toolbar-title>
      </div>

      <p style="padding: 25px;" class="text-grey-7">
        This is yet another Drawer that does not gets displayed alongside content on
        bigger screens.
      </p>
    </q-drawer>


      <q-toolbar-title :padding="0" class="within-iframe-only">
        Footer
      </q-toolbar-title>
    </div>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>