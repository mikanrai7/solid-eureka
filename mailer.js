let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'finapp.lsbdc@gmail.com',
        pass: 'racoons@1'
    }
});

let mailOptions = {
    from: 'aayush6194@gmail.com',
    to: 'chamlingrainisha@gmail.com',
    subject: 'Sending email using node.js',
    text: 'That was poop'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });