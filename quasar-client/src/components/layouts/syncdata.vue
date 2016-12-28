<template>

    <div>
        <div class="layout-padding">
            <button class="primary" @click="addData()">
 Add random data !
</button>
            <div class="list">
                <div class="item" v-for="data in items">
                    <div class="item-content">
                        {{data}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var PouchDB = require('pouchdb');
    import auth from '../../auth';

    var randomString = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    export default {
        data() {
            return {
                items: [],
            }
        },
        methods: {
            addData() {
                var rmd = randomString(12);
                this.items.push(rmd);
                console.log("rmd: " + rmd)
                var db = new PouchDB('localDB');
                db.put({
                    _id: rmd,
                    name: rmd,
                });
            }
        }

    }
</script>