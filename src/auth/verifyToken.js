const jwt = require('jsonwebtoken');

verifyToken = async (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token)
        return res.send(403, { auth: false, accessToken: null, mensagem: "Sem acesso" });

    const email  = await jwt.verify(token, 'secret_token');
    console.log('email',email)
    req.email = email;
    next();
}

module.exports = verifyToken;
