const util = require("util");
const mysql = require("mysql");

// grace:
// setup a connection to MySQL
// using credentials
// may want to load creds via env vars
const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "trilogy!",
  database: "employees"
});

// grace:
// connect using config from above
connection.connect();

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
