const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "proyect",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },

      parragraph: {
        type: DataTypes.TEXT, // modifiqué (fijarse si rompe por postman)
      },

      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      proyectType: {
        // modifiqué

        type: DataTypes.STRING,
      },

      file: {
        // modifiqué

        type: DataTypes.STRING,
      },

    },
    { timestamps: false }
  );
};
