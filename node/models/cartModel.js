var db = require("../dbconnection");

var Cart = {
  getAllCart: function(callback) {
    return db.query(
      "Select * from cart_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getCartByUser: function(id, callback) {
    return db.query(
      "select * from cart_tbl where fk_user_email_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addCart: function(item, callback) {
    return db.query(
      "Insert into cart_tbl values(?,?,?,?,?,?)",
      [
        "null",
        item.fk_user_email_id,
        item.fk_product_id,
        item.product_qty,
        1,
        0
      ],
      callback
    );
  },
  deleteCart: function(id, callback) {
    return db.query(
      "update cart_tbl set is_delete=1, is_active=0 where pk_cart_id=?",
      [id],
      callback
    );
  },
  updateCart: function(id, item, callback) {
    return db.query(
      "update cart_tbl set product_qty=? where pk_cart_id=?",
      [item.product_qty, id],
      callback
    );
  }
};
module.exports = Cart;
