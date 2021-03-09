const mongo = require('mongoose');
const uri = 'mongodb+srv://lista_filmes_admin:samuel123456@listafilmesbackend.prfvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongo.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongo.Promise = global.Promise;

module.exports = mongo;