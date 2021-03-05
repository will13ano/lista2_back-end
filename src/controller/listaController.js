const express = require('express');
const authMiddle = require('../middleware/auth');
const 

const router = express.Router();

router.use(authMiddle);

router.get('/', async (req, res) => {
    res.send({id: req.userID});
});

module.exports = app => app.use('/list', router);