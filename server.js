const express = require('express');

const teamsRouter = require('./teams/teamsRouter');

const server = express();

server.use(express.json());
server.use('/teams', teamsRouter);

module.exports = server;