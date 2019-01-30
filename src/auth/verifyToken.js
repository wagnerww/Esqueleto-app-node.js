const jwt = require('jsonwebtoken');

verifyToken = async (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token)
        return res.send(403, { auth: false, accessToken: null, mensagem: "Sem acesso" });

    const {user} = await jwt.verify(token, 'secret_token');
    const {id, perfil} = user;    
    req.id = id; ///Cria um cabeçalho do usuário para o próximo nível
    next();
}

module.exports = verifyToken;
