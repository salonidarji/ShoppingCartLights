var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var category = require("./routes/category");
var admin = require("./routes/admin");
var feature = require("./routes/feature");
var product = require("./routes/product");
var productFeature = require("./routes/productFeature");
var productImage = require("./routes/productImage");
var user = require("./routes/user");
var userAddress = require("./routes/userAddress");
var order = require("./routes/order");
var orderDetail = require("./routes/orderDetail");
var sendEmail = require("./routes/sendEmail");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/category", category);
app.use("/admin", admin);
app.use("/feature", feature);
app.use("/product", product);
app.use("/productFeature", productFeature);
app.use("/productImage", productImage);
app.use("/user", user);
app.use("/userAddress", userAddress);
app.use("/order", order);
app.use("/orderDetail", orderDetail);
app.use("/sendEmail", sendEmail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
