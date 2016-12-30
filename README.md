# quasar-pouchdb-authentification
Sample authentification with quasar-framework (vuejs) and pouchdb-server

# Installation

####Create couchdb server
<i>npm install -g pouchdb-server</i><br>
create pouchdb-server folder<br>
<i>cd pouchdb-server</i><br>
<i>pouchdb-server -p 15984</i><br><br>
go to:  http://127.0.0.1:15984/_utils<br>
<br>
create admin party with: <br>
Admin login: <i>admin</i> <br>
Admin password: <i>admin</i> 

####Setup node server
<i>cd nodejs-server</i><br>
<i>npm install</i><br>
<i>node index.js</i><br>

####Setup client (quasar framework)
<i>npm install -g quasar-cli</i><br>
<i>cd  quasar-client</i><br>
<i>quasar dev</i><br><br>

Default login (client): <i>demo@demo.com</i> <br>
Default password (client): <i>demo</i> <br>




