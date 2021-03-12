const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.get


require('./controller/projectController')(app);
require('./controller/loginController')(app);
require('./controller/listaController')(app);

app.listen(port);