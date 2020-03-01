const express = require('express');
const cors = require('cors');
const teamsRouter = require('./teams/teamsRouter');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/teams', teamsRouter);

module.exports = server;