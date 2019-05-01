var db = require("../dbconnection");

var UserAddress = {
  getAllUserAddress: function(callback) {
    return db.query(
      "Select * from user_address_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getUserAddress: function(id, callback) {
    return db.query(
      "select * from user_address_tbl where pk_address_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addUserAddress: function(item, callback) {
    return db.query(
      "Insert into user_address_tbl values(?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        "null",
        item.address_name,
        item.address_mobile,
        item.address_line_1,
        item.address_line_2,
        item.address_landmark,
        item.address_pincode,
        item.address_city,
        item.fk_user_id,
        item.is_default,
        1,
        0
      ],
      callback
    );
  },
  deleteUserAddress: function(id, callback) {
    return db.query(
      "update user_address_tbl set is_delete=1, is_active=0 where pk_address_id=?",
      [id],
      callback
    );
  },
  updateUserAddress: function(id, item, callback) {
    return db.query(
      "update user_address_tbl set address_name=?,address_mobile=?,address_line_1=?,address_line_2=?,address_landmark=?,address_pincode=?,address_city=?,fk_user_id=?,is_default=? where pk_address_id=?",
      [
        item.address_name,
        item.address_mobile,
        item.address_line_1,
        item.address_line_2,
        item.address_landmark,
        item.address_pincode,
        item.address_city,
        item.fk_user_id,
        item.is_default,
        id
      ],
      callback
    );
  }
};
module.exports = UserAddress;
