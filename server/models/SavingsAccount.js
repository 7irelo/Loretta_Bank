const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');

const SavingsAccount = sequelize.define('SavingsAccount', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'idNumber',
    },
  },
  balance: {
    type: DataTypes.DOUBLE,
  },
  interestRate: {
    type: DataTypes.FLOAT,
  },
});

module.exports = SavingsAccount;