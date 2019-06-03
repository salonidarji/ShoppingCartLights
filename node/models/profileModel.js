var db = require("../dbconnection");

var Profile = {
  changePassword: function(id, item, callback) {
    return db.query(
      "update user_tbl set user_password=? where user_email=?",
      [item.user_password, id],
      callback
    );
  },
  getUser: function(id, callback) {
    return db.query(
      "select * from user_tbl where user_email=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  }
};
module.exports = Profile;
