const express = require('express');
const cors = require('cors');
const teamsRouter = require('./teams/teamsRouter');
const matchupsRouter = require('./team-matchups/matchupsRouter');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const server = express();

server.use(express.json());
server.use(cors());

server.use('/teams', teamsRouter);
server.use('/matchups', matchupsRouter);

module.exports = server;