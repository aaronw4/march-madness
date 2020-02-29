const express = require('express');
const cors = require('cors')
const teamsRouter = require('./teams/teamsRouter');

const server = express();

const corsOptions = {
    origin: true,
    credentials: true,
    methods: ['GET', 'POST']
};

server.use(express.json());
server.use(cors(corsOptions));
server.use('/teams', teamsRouter);

module.exports = server;