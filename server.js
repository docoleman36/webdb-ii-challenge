const express = require('express');
const helmet = require('helmet');

const carRouter = require('./router/carRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/car', carRouter);

module.exports = server;