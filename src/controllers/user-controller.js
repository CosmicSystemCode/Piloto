const UserModel = require('../models/user-model');

const UserController = {

    //Criar novo usuário
    async createUser(req, res){
        try {
            const { username, email, password } = req.body;
            const user = await UserModel.create({ username, email, password });
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    //Selecionando todos usuários
    async getAllUser(req, res){
        try {
            const user = await UserModel.findAll();
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

//Exportando métodos para usar nas rotas
module.exports = UserController;