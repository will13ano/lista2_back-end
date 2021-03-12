const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../config/auth');

const router = express.Router();

function generateToken(params = {}){
    return token = jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try{
        if(await User.findOne({ email }))
            return res.status(400).send({error : 'User already exists'});

        const user = await User.create(req.body);
        
        user.senha = undefined;

        res.send({
            user,
            token : generateToken({id : user.id })
        });
    } catch (err) {
        return res.status(400).send({ error : 'Registration failed'})
    } 

});

router.post('/auth', async (req, res) => {
    const {email, senha} = req.body;
    var user = await User.findOne({email}).select('+senha');
    
    if(!user)
        return res.status(400).send({error : 'User not found'});
    
    if (! await bcrypt.compare(senha, user.senha) )
        return res.status(400).send({error : 'Invalid password'});
    
    user.senha = undefined;
    res.send({
        user,
        token : generateToken({id : user.id })
    });
});

router.get('/', (req, res) => {
    res.json({
        message: "chegou"
    })
});

module.exports = app => app.use('/login', router)