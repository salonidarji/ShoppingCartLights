var db = require("../dbconnection");

var Feature = {
  getAllFeature: function(callback) {
    return db.query(
      "Select * from feature_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getFeature: function(id, callback) {
    return db.query(
      "select * from feature_tbl where pk_feature_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addFeature: function(item, callback) {
    return db.query(
      "Insert into feature_tbl values(?,?,?,?)",
      ["null", item.feature_name, 1, 0],
      callback
    );
  },
  deleteFeature: function(id, callback) {
    return db.query(
      "update feature_tbl set is_delete=1, is_active=0 where pk_feature_id=?",
      [id],
      callback
    );
  },
  updateFeature: function(id, item, callback) {
    return db.query(
      "update feature_tbl set feature_name=? where pk_feature_id=?",
      [item.feature_name, id],
      callback
    );
  }
};
module.exports = Feature;
