const router = require('../config/server').server;
const userModel = require('../models/usuariosModel');
const modelRouter = require('../routes/model-router');
const autenticacao = require('../auth/register');

const basePath = '/users';
router.get(`${basePath}`, (req, res, next) => modelRouter.findAll(userModel, req, res, next));
router.post(`${basePath}`, (req, res, next) => modelRouter.create(userModel, req, res, next));
router.put(`${basePath}/:id`, (req, res, next) => modelRouter.update(userModel, req, res, next));
router.del(`${basePath}/:id`, (req, res, next) => modelRouter.delete(userModel, req, res, next));
//Autenticação
router.get(`${basePath}/auth`, (req, res, next) => autenticacao(req, res, next));
