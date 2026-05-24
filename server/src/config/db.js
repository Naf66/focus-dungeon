import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  password: "00200",
  host: "localhost",
  port: 5432,
  database: "focus_dungeon",
});

export default pool;