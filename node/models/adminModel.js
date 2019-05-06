var db = require("../dbconnection");

var Admin = {
  getAllAdmin: function(callback) {
    return db.query(
      "Select * from admin_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getAdmin: function(id, callback) {
    return db.query(
      "select * from admin_tbl where admin_email=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addAdmin: function(item, callback) {
    return db.query(
      "Insert into admin_tbl values(?,?,?,?,?,?,?)",
      [
        "null",
        item.admin_name,
        item.admin_password,
        item.admin_email,
        item.admin_mobile,
        1,
        0
      ],
      callback
    );
  },
  deleteAdmin: function(id, callback) {
    return db.query(
      "update admin_tbl set is_delete=1, is_active=0 where pk_admin_id=?",
      [id],
      callback
    );
  },
  updateAdmin: function(id, item, callback) {
    return db.query(
      "update admin_tbl set admin_name=? , admin_password=?, admin_email=?, admin_mobile=? where pk_admin_id=?",
      [
        item.admin_name,
        item.admin_password,
        item.admin_email,
        item.admin_mobile,
        id
      ],
      callback
    );
  }
};
module.exports = Admin;
