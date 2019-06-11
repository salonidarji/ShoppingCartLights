var db = require("../dbconnection");

var Wishlist = {
  getAllWishlist: function(callback) {
    return db.query("Select * from wishlist_tbl", callback);
  },
  getWishlist: function(id, callback) {
    return db.query(
      "select * from wishlist_tbl where fk_user_email=? ",
      [id],
      callback
    );
  },
  addWishlist: function(item, callback) {
    return db.query(
      "Insert into wishlist_tbl values(?,?,?,?)",
      ["null", 1, item.fk_product_id, item.fk_user_email],
      callback
    );
  },
  deleteWishlist: function(id, callback) {
    return db.query(
      "update wishlist_tbl set wishlist_value = 0 where fk_product_id=?",
      [id],
      callback
    );
  }
};
module.exports = Wishlist;
