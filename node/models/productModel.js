var db = require("../dbconnection");

var Product = {
  getAllProduct: function(callback) {
    return db.query(
      "Select *  from product_tbl p, category_tbl c where p.fk_category_id=c.pk_category_id && c.is_active=1 && p.is_active=1 && c.is_delete=0 && p.is_delete=0",
      callback
    );
  },
  getProduct: function(id, callback) {
    return db.query(
      "select * from product_tbl where pk_product_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addProduct: function(item, callback) {
    return db.query(
      "Insert into product_tbl values(?,?,?,?,?,?,?,?)",
      [
        "null",
        item.product_name,
        item.product_desc,
        item.product_price,
        item.product_sale_price,
        item.fk_category_id,
        1,
        0
      ],
      callback
    );
  },
  deleteProduct: function(id, callback) {
    return db.query(
      "update product_tbl set is_delete=1, is_active=0 where pk_product_id=?",
      [id],
      callback
    );
  },
  updateProduct: function(id, item, callback) {
    return db.query(
      "update product_tbl set product_name=? ,product_desc=? ,product_price=? ,product_sale_price=? ,fk_category_id=?   where pk_product_id=?",
      [
        item.product_name,
        item.product_desc,
        item.product_price,
        item.product_sale_price,
        item.fk_category_id,
        id
      ],
      callback
    );
  }
};
module.exports = Product;
