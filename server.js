'use strict';

const proxy = require('express-http-proxy');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const { proxyTo, port } = require('yargs').argv;
require('dotenv').config();

if (!proxyTo || !port) {
  throw new Error(
    'Аргументы "port" и "proxyTo" должны быть определены, смотри README'
  );
}

const publicURL = process.env.PUBLIC_URL || '';

const app = express();

const accessLogStream = rfs.createStream(`/access_CPA.log`, {
  interval: '1d', // rotate daily (раз в сетки будет создавать файл)
  size: '10M',
  compress: true,
  path: path.join(__dirname, 'logs'),
});

app.use(
  morgan('CPA: :method :url :status time: :response-time :date[clf]', {
    stream: accessLogStream,
  })
);

app.use(`${publicURL}`, express.static(path.join(__dirname, 'build')));
app.use(
  `${publicURL}/api/*`,
  proxy(proxyTo, {
    proxyReqPathResolver: (req) => {
      return req.originalUrl.replace(publicURL, '');
    },
  })
);
app.get(`${publicURL}*`, function (_req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log(`Started at http://0.0.0.0:${port}${publicURL}`);
app.listen(port);
