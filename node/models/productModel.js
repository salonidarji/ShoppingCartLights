var db = require("../dbconnection");

var Product = {
  getAllProduct: function(callback) {
    return db.query(
      "Select * from product_tbl p ,product_image_tbl pi where p.pk_product_id=pi.fk_product_id && p.is_delete=0 && p.is_active=1 && pi.is_delete=0 && pi.is_active=1 && pi.is_cover=1",
      callback
    );
  },
  getProduct: function(id, callback) {
    return db.query(
      "Select * from product_tbl p,product_image_tbl pi where p.pk_product_id=pi.fk_product_id && pk_product_id=? && p.is_delete=0 && p.is_active=1",
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
      "update product_tbl p , product_image_tbl pi, product_feature_tbl pf set p.is_delete=1, p.is_active=0 ,pi.is_delete=1, pi.is_active=0 ,pf.is_delete=1, pf.is_active=0 where p.pk_product_id=? && pi.fk_product_id=? && pf.fk_product_id=?",
      [id, id, id],
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
