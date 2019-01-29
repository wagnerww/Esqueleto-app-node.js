const crud = {
    findAll: async (model, req, res, next) => {
        try {
            const data = await model.find()
            res.send(200, data);
        } catch (err) {
            return res.send(400, { "erro": `Falha ao buscar:  ${err}` });
        }
        next();
    },

    create: async (model, req, res, next) => {
        try {
            const data = await model.create(req.body)
            res.send(200, data);
        } catch (err) {
            return res.send(400, { "erro": `Falha ao cadastrar:  ${err}` });
        }
        next();
    },

    update: async (model, req, res, next) => {
        try {
            const options = { runValidator: true, overwrite: true };
            const id = { _id: req.params.id };
            const data = await model.updateOne(id, req.body);
            res.send(200, data);
        } catch (err) {
            return res.send(400, { "erro": `Falha ao editar:  ${err}` });
        }
        next();
    },

    delete: async (model, req, res, next) => {
        try {
            const data = await model.deleteOne({ _id: req.params.id })
            res.send(200, data);
        } catch (err) {
            return res.send(400, { "erro": `Falha ao apagar:  ${err}` });
        }
        next();
    },
}

module.exports = crud;