const { createPool } = require("mysql2");

const pool = createPool({
  host: "34.101.172.209",
  port: 3306,
  user: "sabo-admin",
  password: "sabosecret",
  database: "sabo_db",
  connectionLimit: 10
});

module.exports = pool;
