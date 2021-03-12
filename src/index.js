const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

require('./controller/projectController')(app);
require('./controller/loginController')(app);
require('./controller/listaController')(app);

app.get('/', (req, res) => {
    res.json({
        message: "API DO SAMUEL WILLIAN DE SOUZA"
    })
});

app.listen(port);