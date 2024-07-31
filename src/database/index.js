const path = require("path");
const { Sequelize } = require("sequelize");
const config = require("../config");
const pg = require('pg')

const dbPath = path.join(__dirname, "../../db.sqlite");

const sequelize = new Sequelize(config.POSTGRES_URL, {
  // storage: dbPath,
  dialect: "postgres",
  dialectModule: pg,
  sync: true,
  logging: console.log,
});

sequelize.sync({ alter: { drop: false } });

module.exports = {
  sequelize,
};
