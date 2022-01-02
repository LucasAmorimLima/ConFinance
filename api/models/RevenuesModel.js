const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')
 

const Revenues = connection.sequelize.define('revenues', {
nome: {
    type: DataTypes.STRING,
    allowNull: false
    },
capital: {
    type: DataTypes.DOUBLE,
    allowNull: false
    },
receiptDay: {
    type: DataTypes.DATEONLY,
    allowNull: false
    },
});
module.exports = Revenues
//Revenues.sync({force: true})