const nodemailer = require("nodemailer");
var SendEmailUser = {
  sendMail: function(item, callback) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "akshay.rexontechnologies@gmail.com", // generated ethereal user
        pass: "Rexon@Designer" // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: "akshay.rexontechnologies@gmail.com",
      to: item.user_email,
      subject: "Password = " + item.user_password,
      html: `<h1>header tag</h1>`
    };

    let info = transporter.sendMail(mailOptions);
    //callback(info);
  }

  //sendMail().catch(console.error);
};

module.exports = SendEmailUser;
