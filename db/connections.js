const mysql = require("mysql2");
const util = require("util");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "gribbs25",
    database: "employees",
  },
  console.log("Connected to the employee database.")
);

db.connect();
db.query = util.promisify(db.query);
module.exports = db;
