const conn = require("./conexion.js");
const Sequelize = require("sequelize");

const Package = conn.define(
  "packages",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: Sequelize.DataTypes.TEXT,
    img_url: Sequelize.DataTypes.TEXT,
    precio: Sequelize.DataTypes.FLOAT,
    descripcion: Sequelize.DataTypes.TEXT,
  },
  {}
);

module.exports = Package;
