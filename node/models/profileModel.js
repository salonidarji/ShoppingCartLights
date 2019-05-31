var db = require("../dbconnection");

var Profile = {
  changePassword: function(id, item, callback) {
    return db.query(
      "update user_tbl set user_password=? where user_email=?",
      [item.user_password, id],
      callback
    );
  }
};
module.exports = Profile;
