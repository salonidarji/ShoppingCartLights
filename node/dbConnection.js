var mysql = require("mysql");
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lights_shopping_cart_db"
});
module.exports = connection;
