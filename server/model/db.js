const mysql = require("mysql");
const dbConfig = require("../config/dbConfig.js");
const { port } = require("../config/dbConfig.js");
var connection = mysql.createPool(
    // {
    // host: dbConfig.host,
    // user: dbConfig.user,
    // password: dbConfig.password,
    // database: dbConfig.database
  
// }
// process.env.DATABASE_URL
process.env.CLEARDB_DATABASE_URL
);

module.exports = connection;
