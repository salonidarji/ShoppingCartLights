var db = require("../dbconnection");

var Order = {
  getAllOrder: function(callback) {
    return db.query(
      "Select * from order_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getOrder: function(id, callback) {
    return db.query(
      "select * from order_tbl where pk_order_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addOrder: function(item, callback) {
    return db.query(
      "Insert into order_tbl values(?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        "null",
        item.order_date,
        item.fk_user_id,
        item.address_name,
        item.address_mobile,
        item.address_line_1,
        item.address_line_2,
        item.address_landmark,
        item.address_pincode,
        item.address_city,
        1,
        0
      ],
      callback
    );
  },
  deleteOrder: function(id, callback) {
    return db.query(
      "update order_tbl set is_delete=1, is_active=0 where pk_order_id=?",
      [id],
      callback
    );
  },
  updateOrder: function(id, item, callback) {
    return db.query(
      "update order_tbl set order_date=?,fk_user_id=?,address_name=?,address_mobile=?,address_line_1=?,address_line_2=?,address_landmark=?,address_pincode=?,address_city=? where pk_order_id=?",
      [
        item.order_date,
        item.fk_user_id,
        item.address_name,
        item.address_mobile,
        item.address_line_1,
        item.address_line_2,
        item.address_landmark,
        item.address_pincode,
        item.address_city,
        id
      ],
      callback
    );
  }
};
module.exports = Order;
