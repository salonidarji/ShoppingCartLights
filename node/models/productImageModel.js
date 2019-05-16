var db = require("../dbconnection");
var fs = require("fs");

var ProductImage = {
  getAllProductImage: function(callback) {
    return db.query(
      "Select *  from product_image_tbl pi, product_tbl p where pi.fk_product_id=p.pk_product_id && pi.is_active=1 && p.is_active=1 && pi.is_delete=0 && p.is_delete=0",
      callback
    );
  },
  getProductImage: function(id, callback) {
    return db.query(
      "select * from product_image_tbl where fk_product_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addProductImage: function(item, callback) {
    var dt = new Date(); //current date and time of server

    var text = ""; //random text

    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    var temp = JSON.stringify(item);
    console.log("temp:" + temp);
    var base64d = temp.replace(/^data:image\/jpeg;base64,/, "");

    var path =
      "./public/images/" +
      text +
      dt.getDate() +
      dt.getMonth() +
      dt.getMilliseconds() +
      ".jpeg";

    var path1 =
      "/images/" +
      text +
      dt.getDate() +
      dt.getMonth() +
      dt.getMilliseconds() +
      ".jpeg";

    fs.writeFile(path, base64d, "base64", function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });

    return db.query(
      "Insert into product_image_tbl values(?,?,(select max(pk_product_id) from product_tbl),?,?)",
      ["null", path1, 1, 0],
      callback
    );
  },
  deleteProductImage: function(id, callback) {
    return db.query(
      "update product_image_tbl set is_delete=1, is_active=0 where pk_image_id=?",
      [id],
      callback
    );
  },
  updateProductImage: function(id, item, callback) {
    var dt = new Date(); //current date and time of server

    var text = ""; //random text

    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    var base64d = item.name.replace(/^data:image\/jpeg;base64,/, "");

    var path =
      "./public/images/" +
      text +
      dt.getDate() +
      dt.getMonth() +
      dt.getMilliseconds() +
      ".jpeg";

    var path1 =
      "/images/" +
      text +
      dt.getDate() +
      dt.getMonth() +
      dt.getMilliseconds() +
      ".jpeg";

    fs.writeFile(path, base64d, "base64", function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
    console.log(path1 + "," + item.fk_product_id + "," + id);
    return db.query(
      "update product_image_tbl set image_url=? , fk_product_id=? where pk_image_id=?",
      [path1, item.fk_product_id, id],
      callback
    );
  }
};
module.exports = ProductImage;
