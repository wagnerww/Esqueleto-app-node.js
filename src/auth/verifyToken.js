const jwt = require('jsonwebtoken');

verifyToken = async (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token)
        return res.send(403, { auth: false, accessToken: null, mensagem: "Sem acesso" });

    const { id } = await jwt.verify(token, 'secret_token');

    req.id = id; ///Cria um cabeçalho do usuário para o próximo nível
    next();
}

module.exports = verifyToken;
