const router = require('../config/server').server;
const auth = require('../auth/register');

//Url Base
const basePath = '/auth';

// ------ Autenticação
router.post(`${basePath}/login`, (req, res, next) => auth.login(req, res, next));
router.post(`${basePath}/logout`, (req, res, next) => auth.logout(req, res, next));
