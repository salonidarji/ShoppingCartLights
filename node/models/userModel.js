var db = require("../dbconnection");

var User = {
  getAllUser: function(callback) {
    return db.query(
      "Select * from user_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getUser: function(id, callback) {
    return db.query(
      "select * from user_tbl where pk_user_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addUser: function(item, callback) {
    return db.query(
      "Insert into user_tbl values(?,?,?,?,?,?,?)",
      [
        "null",
        item.user_name,
        item.user_email,
        item.user_mobile,
        item.user_password,
        1,
        0
      ],
      callback
    );
  },
  deleteUser: function(id, callback) {
    return db.query(
      "update user_tbl set is_delete=1, is_active=0 where pk_user_id=?",
      [id],
      callback
    );
  },
  updateUser: function(id, item, callback) {
    return db.query(
      "update user_tbl set user_name=? , user_email=?, user_mobile=?, user_password=? where pk_user_id=?",
      [
        item.user_name,
        item.user_email,
        item.user_mobile,
        item.user_password,
        id
      ],
      callback
    );
  }
};
module.exports = User;
