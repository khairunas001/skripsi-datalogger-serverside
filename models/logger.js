'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  logger.init({
    tanggal: DataTypes.STRING,
    waktu: DataTypes.STRING,
    suhu: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'logger',
  });
  return logger;
};