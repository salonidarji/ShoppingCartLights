var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
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
var sendEmailUser = require("./routes/sendEmailUser");
var cart = require("./routes/cart");
var profile = require("./routes/profile");
var EmailVerification = require("./routes/EmailVerification");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

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
app.use("/sendEmailUser", sendEmailUser);
app.use("/cart", cart);
app.use("/profile", profile);
app.use("/emailVerification", EmailVerification);

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
