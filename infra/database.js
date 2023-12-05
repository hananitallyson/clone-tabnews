import { Pool } from "pg";

async function query(queryObject) {
  const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    max: 5,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 10000,
    allowExitOnIdle: true,
  });
  const client = await pool.connect();
  const result = await client.query(queryObject);
  client.release(true);
  await pool.end();
  return result;
}

export default {
  query: query,
};
