const db = require('../data/dbConfig');

function add(team) {
    return db('teams')
        .insert(team, 'id')
}

function find() {
    return db('teams')
}

module.exports = {
    add,
    find
}