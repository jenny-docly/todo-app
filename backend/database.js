const { Client } = require("pg");

const client = new Client({
  host: "database-instance.cgh8xaxjrxgl.eu-west-1.rds.amazonaws.com",
  port: 5432,
  database: "todo_db",
  user: "postgres",
  password: "qlik-assignment"
});

client.connect(error => {
  if (error) {
    console.error("Failed to connect to database:", error.stack);
  } else {
    console.log("Successfully connected to database!");
  }
});

module.exports = {
  client
};
