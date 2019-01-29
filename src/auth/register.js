const jwt = require('jsonwebtoken');
const userModel = require('../models/usuariosModel');

const autenticate = async (req, res, next) => {
    const { email, senha } = req.body;
    const data = await userModel.find({ email, senha})

    if (data.length){
        const accessToken = await jwt.sign({ sub: email, iss: 'exemplo_autenticacao' }, 'secret_token');
        res.send(200, { email, accessToken });
    } else {
        res.send(403, {'erro':'usuário/senha inválidos'});
    }
}

module.exports = autenticate;
