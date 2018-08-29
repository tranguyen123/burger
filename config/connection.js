var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection= mysql.createConnection(process.env.JAWSDB_URL);

}else {
  connection = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b4dd973e2ad284",
    password: "dbf0b3a3",
    database: "heroku_d344185bc6a3b51"
});
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;