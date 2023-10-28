const nodemailer = require('nodemailer');

// Creating a transporter with  email service details
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ridwan02@gmail.com',
      pass: '1rR;RzYii3=y'
    }
  });

  // Email data
  const mailOptions = {
    from: 'ridwan02@gmail.com',
    to: 'ridtwo@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  // Send the email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });