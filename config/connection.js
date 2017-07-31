//Establish mySQL connnection:
const mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "10053VUa!",
    database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log("connected as " + connection.threadId);
});


module.exports = connection;