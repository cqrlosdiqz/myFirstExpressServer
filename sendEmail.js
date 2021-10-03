const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_SECRET,
    },
  });

  transporter.sendMail(
    {
      from: 'Carlos Díaz Flores👻" <diaz.flores.c@gmail.com>',
      to: 'diaz.flores.c@gmail.com',
      subject: 'Hello David, soy Carlos Díaz ✔',
      html: `<h1>NODEMAILER</h1>
    <p>Hola David, te envío mi primer correo con <strong>Nodemailer</strong>. Tuve que desactivar el antivirus para poder enviarlo. Bendito San Google 😁</p>
    <p>Este es el <a href="https://github.com/cqrlosdiqz/myFirstExpressServer">link</a> del repositorio</p>
    <p>Que tengas un buen fin de semana!</p>
    <p>Carlos Díaz Flores</p>
    `,
    },
    (error, info) => {
      if (error) {
        res.status(500).send(`Error: ${error.message}`);
      } else {
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent satisfactory');
      }
    }
  );
};

module.exports = sendEmail;
