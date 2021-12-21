const mysql = require("mysql");

//create MySQL conncection

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql_crud_db",
});

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database connected successfully");
});

module.exports = dbConn;
