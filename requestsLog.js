const moment = require('moment');
const fs = require('fs');

const requestsLog = (req, res, next) => {

  const now = moment().format('DD-MM-YYYY HH:mm:ss');
  try {
    const newline = `${now} - ${res.statusCode} ${req.originalUrl}\n`;

    fs.appendFile('requests.log', newline, (err) => {
      if (err) throw err;
      console.log('Saved log!');
      next();
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = requestsLog;
