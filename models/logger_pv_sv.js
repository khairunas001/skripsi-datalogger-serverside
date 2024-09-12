'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logger_pv_sv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  logger_pv_sv.init({
    tanggal: DataTypes.DATEONLY,
    waktu: DataTypes.TIME,
    suhu: DataTypes.FLOAT,
    sv: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'logger_pv_sv',
  });
  return logger_pv_sv;
};