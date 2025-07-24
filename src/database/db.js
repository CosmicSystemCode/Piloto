const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

//Fazendo conexão com o banco de dados
const sequelize = new Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
});

//Expportando conexão com o banco de dados
module.exports = sequelize;