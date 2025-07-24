const userController = require('../controllers/user-controller');
const express = require('express');
const userRouter = express.Router();

//Definindo as rotas do user
userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUser);

//Exportando as rotas
module.exports = userRouter;