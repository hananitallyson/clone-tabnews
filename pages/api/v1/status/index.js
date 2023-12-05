import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseVersion = (await database.query("SHOW server_version;")).rows[0]
    .server_version;
  const databaseOpenedConnections = (
    await database.query("SELECT sum(numbackends) FROM pg_stat_database;")
  ).rows[0].sum;
  const databaseMaxConnections = (await database.query("SHOW max_connections;"))
    .rows[0].max_connections;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: databaseMaxConnections,
        opened_connections: databaseOpenedConnections,
        version: databaseVersion,
      },
    },
  });
}

export default status;
