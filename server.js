const express = require('express');
const moment = require('moment');
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const sendEmail = require('./sendEmail');

const server = express();

//Setting
const port = 8080;

//Static
server.use(express.static(path.join(__dirname, 'public')));

//function
const requestsLog = (req, res, next) => {
  const now = moment().format('DD-MM-YYYY HH:mm:ss');
  try {
    const newline = `${now} - ${res.statusCode} ${req.originalUrl}\n`;

    fs.appendFile('requests.log', newline, (error, file) => {
      console.log('Saved log!');
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

//Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(requestsLog);

//Endpoints

server.use('/home', (req, res) => {
  const message = `
    <h1>!Ya sé Node!</h1>
`;
  res.status(200).send(message);
});

server.use('/hw', (req, res) => {
  const message = `<p style="color: orange">Happy Halloween!</p>`;

  res.status(200).send(message);
});
server.use('/myjson', (req, res) => {
  const message = `{
    "nombre": "Espagueti",
    "apellido": "Volador",
    "habilidades": ["Node", "Mongo"],
    "vacaciones": {
        "lugar1": "Benidorm",
        "lugar2": "Groenlandia"
    }
}`;

  res.status(200).send(message);
});

server.use('/timenow', (req, res) => {
  const message = moment().format('LTS');

  res.status(200).send(message);
});

server.use('/image', (req, res) => {
  const message = path.join(__dirname, '/public/images/node.png');
  console.log(message);
  res.status(200).sendFile(message);
});

//Email
server.use('/email', sendEmail);

//Not found
server.use('*', (req, res) => {
  res.status(404).send(`<h1>NOT FOUND</h1>`);
});

server.listen(port, () => console.log(`Server started listening on ${port}`));
