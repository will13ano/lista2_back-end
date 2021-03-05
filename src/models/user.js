const mongo = require('../database/index');
const bcrypt = require('bcryptjs');

const UserSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const User = mongo.model('User', UserSchema);

module.exports = User;