const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


require('./controller/projectController')(app);
require('./controller/loginController')(app);
require('./controller/listaController')(app);

app.listen(3000);