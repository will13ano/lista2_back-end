const mongo = require('../database/index');

const listaSchema = new mongo.Schema({
    user: {
        type: String,
        unique: true
    },
    listaFilmes: {
        type: [],
        default: [],
    }
});

const List = mongo.model('Lista', listaSchema);

module.exports = List;