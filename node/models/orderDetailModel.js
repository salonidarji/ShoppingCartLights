var db = require("../dbconnection");

var OrderDetail = {
  getAllOrderDetail: function(callback) {
    return db.query(
      "Select * from order_detail_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getOrderDetail: function(id, callback) {
    return db.query(
      "select * from order_detail_tbl where pk_detail_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addOrderDetail: function(item, callback) {
    return db.query(
      "Insert into order_detail_tbl values(?,?,?,?,?,?,?)",
      [
        "null",
        item.fk_order_id,
        item.fk_product_id,
        item.detail_qty,
        item.detail_price,
        1,
        0
      ],
      callback
    );
  },
  deleteOrderDetail: function(id, callback) {
    return db.query(
      "update order_detail_tbl set is_delete=1, is_active=0 where pk_detail_id=?",
      [id],
      callback
    );
  },
  updateOrderDetail: function(id, item, callback) {
    return db.query(
      "update order_detail_tbl set fk_order_id=?, fk_product_id=? where pk_detail_id=?",
      [
        item.fk_order_id,
        item.fk_product_id,
        item.detail_qty,
        item.detail_price,
        id
      ],
      callback
    );
  }
};
module.exports = OrderDetail;
