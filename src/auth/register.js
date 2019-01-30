const jwt = require('jsonwebtoken');
const userModel = require('../models/usuariosModel');

const auth = {
    login: async (req, res, next) => {
        const { email, senha } = req.body;
        const data = await userModel.find({ email, senha })
        if (data.length) {
            console.log(data)
            const {id} = data[0];
            console.log('id',id)
           // console.log('_id',_id)
            const accessToken = await jwt.sign({ id, iss: 'exemplo_autenticacao' }, 'secret_token');
            res.send(200, { auth: true, email, accessToken });
        } else {
            res.send(403, { 'erro': 'usuário/senha inválidos' });
        }
        next();
    },

    logout: async (req, res, next) => {
        const { email } = req.body;
        res.send(200, { auth: false, email, accessToken: null });
        next();
    }
}

module.exports = auth;
