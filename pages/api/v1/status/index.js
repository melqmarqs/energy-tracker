import database from "/infra/database.js";

async function status(request, response) {
  const dbServerVersion = (await database.query("SHOW server_version;")).rows[0]
    .server_version;
  const dbMaxConnections = +(await database.query("SHOW max_connections;"))
    .rows[0].max_connections;
  const dbCurrentConnections = (
    await database.query({
      text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [process.env.POSTGRES_DB],
    })
  ).rows[0].count;

  response.status(200).json({
    updated_at: new Date().toISOString(),
    dependencies: {
      database: {
        version: dbServerVersion,
        max_connections: dbMaxConnections,
        current_connections: dbCurrentConnections,
      },
    },
  });
}

export default status;
