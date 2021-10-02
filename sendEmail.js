const nodemailer = require('nodemailer');

const sendEmail = async () => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_SECRET,
    },
  });

  let info = await transporter.sendMail({
    from: 'Carlos Díaz Flores👻" <diaz.flores.c@gmail.com>',
    to: 'diaz.flores.c@hotmail.com,',
    subject: 'Hello ✔',
    html: `<h1>NODEMON</h1>
    <p>Hola David, te envío mi primer correo con Nodemon. Tuve que desactivar el antivirus para poder enviarlo. Bentido San Google 😁</p>
    <p>Este es el <a href="https://github.com/cqrlosdiqz/myFirstExpressServer">link</a> del repositorio</p>
    <p>Que tengas un buen fin de semana</p>
    <p>Carlos Díaz Flores</p>
    `,
  });

  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
