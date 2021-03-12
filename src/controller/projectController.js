const express = require('express');
const authMiddle = require('../middleware/auth');
const tmdb = require('../api/tmdb/func');

const router = express.Router();

router.use(authMiddle);

router.get('/find', async (req, res) => {
    const key = req.query.key;
    const page = req.query.page;
    const id = req.query.id;

    if(id){
        const {data} = await tmdb.buscaID(id);    
        return res.send({results: data});
    }

    const {data} = await tmdb.buscaNome(key, page);

    res.send({results: data});
});

router.get('/chegou', (req, res) => {
    res.send({
        message: "chegou"
    })
})

module.exports = app => app.use('/project', router);