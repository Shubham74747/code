var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shubhamshukla201995@gmail.com",
    pass: "whaxriqbpmyeigcx",
  },
});

var mailOptions = {
  from: "shubhamshukla201995@gmail.com",
  to: "shubhamshukla201995@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
