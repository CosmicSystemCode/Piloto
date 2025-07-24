const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

//Tabela usuário usando sequelize
const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},  {
    paranoid: true,
    timestap: true,
});

//Salvando alterações na tabela
sequelize.sync({ alter: true })
    .then(() => console.log('Tabela user sincronizado'))
    .catch((err) => console.error('Erro ao sincronizar User: ', err));

//Exportando Tabela User
module.exports = User;