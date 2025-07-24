const userModel = require('./user-model');
const sequelize = require('../database/db');

const User = userModel(sequelize);

sequelize.sync({ alter: true })
    .then(() => console.log('Banco sincronizado'))
    .catch((err) => console.error('Erro ao sincronizar:', err));

module.exports = User;