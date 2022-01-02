const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')


const Users = connection.sequelize.define('user', {
name: {
    type: DataTypes.STRING,
    allowNull: false
    },
email: {
    type: DataTypes.STRING,
    allowNull: false
    },
password: {
    type: DataTypes.STRING,
    allowNull: false
    },
});
module.exports = Users
//Users.sync({force: true})