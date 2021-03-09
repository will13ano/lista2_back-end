const express = require('express');
const authMiddle = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.use(authMiddle);


router.post('/save', async (req, res) => {
    const {lista} = req.body;
    const id = req.userID;

    await User.findByIdAndUpdate(id,{
        lista: lista
    })

    res.status(200).send({message: "save with sucefull"});
});

router.get('/load', async (req,res) => {
    const id = req.userID;

    const user = await User.findById(id);
           
    res.status(200).send({lista: user.lista});
});

module.exports = app => app.use('/list', router);