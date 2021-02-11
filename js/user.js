const conn = require("./conexion.js");
const Sequelize = require("sequelize");

const User = conn.define(
  "usersnew",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: Sequelize.DataTypes.TEXT,
    apellido: Sequelize.DataTypes.TEXT,
    is_admin: Sequelize.DataTypes.BOOLEAN,
  },
  {}
);

module.exports = User;
