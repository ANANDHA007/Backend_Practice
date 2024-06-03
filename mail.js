
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: 'anandhakrishnan.21it@sonatech.ac.in',
    pass: '12302Krishnan'
  }
});


let mailOptions = {
  from: 'anandhakrishnan.21it@sonatech.ac.in',
  to: '12302anandhakrishnanas@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});
