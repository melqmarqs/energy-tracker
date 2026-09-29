import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: "5432",
    user: "local_user",
    database: "local_db",
    password: "local_password",
  });

  await client.connect();
  const result = await client.query(queryObject);

  await client.end();
  return result;
}

export default {
  query: query,
};
