const {api_key} = require('./index');
const {tmdb} = require('./index');

module.exports = {
    buscaNome(nome, page){
        return tmdb.get(`search/movie?api_key=${api_key}&language=pt-BR&query=${nome}&page=${page}`)
    },
    buscaID(id){
        return tmdb.get(`movie/${id}?api_key=${api_key}&language=pt-BR`)
    }
}