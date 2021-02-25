require("dotenv").config();
const url = require("url");
console.log("url ", url);

let host;
let port;
let database;
let username;

if (process.env.DATABASE_URL) {
  const dbUrl = url.parse(process.env.DATABASE_URL);
  host = dbUrl.hostname;
  port = dbUrl.port;
  database = dbUrl.pathname.replace(/^\//, "");
  [username] = dbUrl.auth;
}


module.exports = {
  migrationDirectory: "migrations",
  driver: "pg",
  host,
  port,
  database,
  username,
  ssl: {
    rejectUnauthorized: false,
  },
};