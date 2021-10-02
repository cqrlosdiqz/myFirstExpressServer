const nodemailer = require('nodemailer');


const sendEmail = async () => {

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'diaz.flores.c@gmail.com', 
      pass: process.env.APP_SECRET, 
    },
  });


  let info = await transporter.sendMail({
    from: 'Carlos Díaz Flores👻" <diaz.flores.c@gmail.com>', 
    to: 'diaz.flores.c@hotmail.com,', 
    subject: 'Hello ✔',
    html: `<h1>Hello world?</h1>`, 
  });

  console.log('Message sent: %s', info.messageId);

};

module.exports = sendEmail;
