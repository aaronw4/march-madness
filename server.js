const express = require('express');
const cors = require('cors');
const teamsRouter = require('./teams/teamsRouter');
const matchupsRouter = require('./team-matchups/matchupsRouter');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/teams', teamsRouter);
server.use('/matchups', matchupsRouter);

module.exports = server;