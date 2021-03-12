const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "chegou"
    })
});

require('./controller/projectController')(app);
require('./controller/loginController')(app);
require('./controller/listaController')(app);

console.log(port);

app.listen(port);