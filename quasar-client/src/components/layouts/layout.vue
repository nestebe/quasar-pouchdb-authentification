<template>
    <q-layout>
        <div slot="header" class="toolbar">
            <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
            <q-toolbar-title :padding="1">
                Sample PouchDB App
            </q-toolbar-title>
            <button @click="$refs.rightDrawer.open()">
        <i>assignment</i>
      </button>
        </div>

        <div slot="header" class="toolbar primary">
            <q-search :model.sync="search" class="primary"></q-search>
        </div>



        <q-drawer ref="leftDrawer">
            <div class="toolbar light">
                <q-toolbar-title :padding="1">
                    Menu
                </q-toolbar-title>
            </div>

            <div class="list no-border platform-delimiter">
                <q-drawer-link icon="perm_identity" to="/layout/">
                    User Infos
                </q-drawer-link>
                <hr>
                <div class="list-label">Layout Components</div>
                <q-drawer-link icon="build" to="/layout/items">
                    Items
                </q-drawer-link>
                <q-drawer-link icon="build" to="/layout/syncdata">
                    Add Item
                </q-drawer-link>
                <q-drawer-link icon="mail" to="/auth/logout">Logout</q-drawer-link>
            </div>
        </q-drawer>

        <router-view class="layout-view"></router-view>

        <q-drawer right-side swipe-only ref="rightDrawer">
            <div class="toolbar light">
                <q-toolbar-title :padding="1">
                    Right-side Drawer
                </q-toolbar-title>
            </div>

            <p style="padding: 25px;" class="text-grey-7"> This is yet another Drawer that does not gets displayed alongside content on bigger screens.
</p>
</q-drawer>
</q-layout>

</template>

<script>

    import auth from '../../auth'
    var PouchDB = require('pouchdb');

    export default {
        data() {
            return {
                search: ''
            }
        },
        created() {
            var remotedb = auth.getUser().remotedb;
            var db = new PouchDB('localDB');
            var sync = PouchDB.sync('localDB', remotedb, {
                //options
                live: true,
                retry: true
            }).on('change', function (info) {
                console.log('database: change');
            }).on('paused', function (err) {
                console.log('database: paused');
            }).on('active', function () {
                console.log('database: active');
            }).on('denied', function (err) {
                console.log('database: denied');
            }).on('complete', function (info) {
                console.log('database: complete');
            }).on('error', function (err) {
                console.log('database: error');
            });
        },
        destroyed() {
            console.log("DESTROYED layout");
            new PouchDB('localDB').destroy().then(function () {
                console.log("destroy localDB");
            });
        }
    }
</script>