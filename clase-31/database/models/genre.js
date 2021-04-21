const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const alias = "Genre";
  const cols = {
    name: Sequelize.STRING(100),
    ranking: Sequelize.INTEGER(10),
    active: Sequelize.TINYINT(1),
  };
  const config = {
    timestamps: false,
  };
  const decualquierManera = sequelize.define(alias, cols, config);

  return decualquierManera;
};
