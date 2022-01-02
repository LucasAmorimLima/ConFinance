const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')
 

const Expenditure = connection.sequelize.define('expenditure', {
name: {
    type: DataTypes.STRING,
    allowNull: false
    },
capital: {
    type: DataTypes.DOUBLE,
    allowNull: false
    },
paymentDay: {
    type: DataTypes.DATEONLY,
    allowNull: false
    },
});
module.exports = Expenditure
//Expenditure.sync({force: true})