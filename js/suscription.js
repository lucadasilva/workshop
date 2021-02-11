const conn = require("./conexion.js");
const Sequelize = require("sequelize");

const Suscription = conn.define(
  "restaurantes",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: { type: Sequelize.DataTypes.INTEGER, foreignKey: true },
    package_id: { type: Sequelize.DataTypes.INTEGER, foreignKey: true },
  },
  {}
);

module.exports = Suscription;
