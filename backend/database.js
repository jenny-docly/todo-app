const { Pool } = require("pg");

const pool = new Pool({
  host: "database-instance.cgh8xaxjrxgl.eu-west-1.rds.amazonaws.com",
  port: 5432,
  database: "todo_db",
  user: "postgres",
  password: "qlik-assignment"
});

pool.connect(error => {
  if (error) {
    console.error("Failed to connect to database:", error.stack);
  } else {
    console.log("Successfully connected to database!");
  }
});

module.exports = {
  pool
};
