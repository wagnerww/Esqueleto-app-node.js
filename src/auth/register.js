const jwt = require('jsonwebtoken');

const  autenticate = async (req, res, next) => {
    const email = req.body.email;
    const accessToken = await jwt.sign({ sub: email, iss: 'exemplo_autenticacao' }, 'secret_token');
    res.send(200, {email, accessToken });
}

module.exports = autenticate;
