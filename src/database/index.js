const path = require("path");
const { Sequelize } = require("sequelize");
const config = require("../config");

const dbPath = path.join(__dirname, "../../db.sqlite");

const sequelize = new Sequelize(config.POSTGRES_URL, {
  // storage: dbPath,
  dialect: "postgres",
  sync: true,
  logging: console.log,
});

sequelize.sync({ alter: { drop: false } });

module.exports = {
  sequelize,
};
