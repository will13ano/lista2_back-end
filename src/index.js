const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

console.log({
    message: "chegou aqui",
    PORT: port
});

require('./controller/projectController')(app);
require('./controller/loginController')(app);
require('./controller/listaController')(app);


app.listen(port);