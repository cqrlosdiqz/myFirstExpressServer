const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_SECRET,
    },
  });

  await transporter.sendMail(
    {
      from: 'Carlos Díaz Flores👻" <diaz.flores.c@gmail.com>',
      to: 'davidcarvajalg@gmail.com, diaz.flores.c@gmail.com',
      subject: 'Hello David, soy Carlos Díaz ✔',
      html: `<h1>NODEMAILER</h1>
    <p>Hola David, te envío mi primer correo con Nodemon. Tuve que desactivar el antivirus para poder enviarlo. Bendito San Google 😁</p>
    <p>Este es el <a href="https://github.com/cqrlosdiqz/myFirstExpressServer">link</a> del repositorio</p>
    <p>Que tengas un buen fin de semana!</p>
    <p>Carlos Díaz Flores</p>
    `,
    },
    (error, info) => {
      if (error) {
        console.log(error);
        res.send(500, error.message);
      } else {
        console.log('Email sent');
        console.log('Message sent: %s', info.messageId);
        res.status(200).send("Email sent satisfactory");
      }
    }
  );
};

module.exports = sendEmail;
