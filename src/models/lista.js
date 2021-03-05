const mongo = require('../database/index');

const listaSchema = new mongo.Schema({
    id: {
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