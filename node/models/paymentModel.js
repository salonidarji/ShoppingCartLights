const nodemailer = require("nodemailer");
var db = require("../dbconnection");

var EmailVerification = {
  makePayment: function(item, callback) {
    console.log("rand: " + rand);

    let info = transporter.sendMail(mailOptions);
    callback(info);
  }
};

module.exports = EmailVerification;
