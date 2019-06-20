var db = require("../dbconnection");

var Wishlist = {
  getAllWishlist: function(callback) {
    return db.query(
      "Select * from wishlist_tbl where wishlist_value=1",
      callback
    );
  },
  getWishlist: function(id, callback) {
    return db.query(
      "select * from wishlist_tbl where fk_user_email=? && wishlist_value=1 ",
      [id],
      callback
    );
  },
  addWishlist: function(item, callback) {
    return db.query(
      "Insert into wishlist_tbl values(?,?,?,?)",
      ["null", item.wishlist_value, item.fk_product_id, item.fk_user_email],
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
