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
      "Select * from product_tbl p, category_tbl c , product_image_tbl pi ,product_feature_tbl pf, feature_tbl f where pi.fk_product_id=p.pk_product_id && p.fk_category_id=c.pk_category_id &&  pf.fk_feature_id=f.pk_feature_id  && pf.fk_product_id=p.pk_product_id && pf.is_active=1 && f.is_active=1 && c.is_active=1 && p.is_active=1 && pi.is_active=1 && c.is_delete=0 && p.is_delete=0 && pi.is_delete=0  && pf.is_delete=0 &&  f.is_delete=0 && pk_product_id=?",
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
  deleteProduct: function(p_id, pi_id, pf_id, callback) {
    return db.query(
      "update product_tbl p , product_image_tbl pi, product_feature_tbl pf set p.is_delete=1, p.is_active=0 ,pi.is_delete=1, pi.is_active=0 ,pf.is_delete=1, pf.is_active=0 where p.pk_product_id=? && pi.fk_product_id=? && pf.pk_product_feature_id=?",
      [p_id, pi_id, pf_id],
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
