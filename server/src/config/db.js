const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "00200",
  host: "localhost",
  port: 5432,
  database: "focus_dungeon",
});

module.exports = pool;