const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('ProyectType', {

    name:{
      type: DataTypes.STRING,
    }
  }, { timestamps: false }); 
  
};
