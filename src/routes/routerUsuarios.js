const router = require('../config/server').server;
const userModel = require('../models/usuariosModel');
const modelRouter = require('../routes/model-router');
const verifyUser = require('../auth/verifyToken');

//Url Base
const basePath = '/users';

// ------ Rotas ABERTAS
router.get(`${basePath}`, (req, res, next) => modelRouter.findAll(userModel, req, res, next));
router.post(`${basePath}`, (req, res, next) => modelRouter.create(userModel, req, res, next));
router.put(`${basePath}/:id`, (req, res, next) => modelRouter.update(userModel, req, res, next));
router.del(`${basePath}/:id`, (req, res, next) => modelRouter.delete(userModel, req, res, next));

// ------ Rotas FECHADAS - Usuário precisa estar logado
router.get(`${basePath}/teste`, verifyUser, (req, res, next) => modelRouter.findAll(userModel, req, res, next));
