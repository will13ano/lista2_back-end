const mongo = require('mongoose');

mongo.connect('mongodb://localhost/api_listaFilmes', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongo.Promise = global.Promise;

module.exports = mongo;