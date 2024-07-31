const dotenv = require("dotenv");
const path = require("path");

const envPath = path.join(__dirname, "../../.env");

dotenv.config({ path: envPath });

module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  POSTGRES_URL: process.env.POSTGRES_URL
};
