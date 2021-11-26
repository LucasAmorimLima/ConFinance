const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')


const Users = connection.sequelize.define('user', {
nome: {
    type: DataTypes.STRING,
    allowNull: false
    },
email: {
    type: DataTypes.STRING,
    allowNull: false
    },
senha: {
    type: DataTypes.STRING,
    allowNull: false
    },
});
module.exports = Users
//User.sync({force: true})