# quasar-pouchdb-authentification
Sample authentification with quasar-framework (vuejs) and pouchdb-server

# Installation

####Create couchdb server
```bash
npm install -g pouchdb-server

#create pouchdb-server folder

cd pouchdb-server
pouchdb-server -p 15984

```
go to:  http://127.0.0.1:15984/_utils
<br>
create admin party with: <br>
Admin login: <i>admin</i> <br>
Admin password: <i>admin</i> 

####Setup node server
```bash
cd nodejs-server
npm install
node index.js
```
####Setup client (quasar framework)
```bash
npm install -g quasar-cli
cd  quasar-client
npm install
quasar dev
```





