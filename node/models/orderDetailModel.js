var db = require("../dbconnection");

var OrderDetail = {
  getAllOrderDetail: function(callback) {
    return db.query(
      "Select *  from order_detail_tbl od, order_tbl o, product_tbl p where od.fk_order_id=o.pk_order_id  && od.fk_product_id=p.pk_product_id && od.is_active=1 && o.is_active=1 && p.is_active=1 && od.is_delete=0 &&  o.is_delete=0 && p.is_delete=0",
      callback
    );
  },
  getOrderDetail: function(id, callback) {
    return db.query(
      "select * from order_detail_tbl where fk_order_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addOrderDetail: function(item, callback) {
    return db.query(
      "Insert into order_detail_tbl values(?,(select max(pk_order_id) from order_tbl),?,?,?,?,?)",
      ["null", item.fk_product_id, item.detail_qty, item.detail_price, 1, 0],
      callback
    );
  },
  deleteOrderDetail: function(id, callback) {
    return db.query(
      "update order_detail_tbl set is_delete=1, is_active=0 where fk_order_id=?",
      [id],
      callback
    );
  },
  updateStatus: function(id, item, callback) {
    return db.query(
      "update order_detail_tbl set order_status=? where pk_detail_id=?",
      [item.order_status, id],
      callback
    );
  }
};
module.exports = OrderDetail;
