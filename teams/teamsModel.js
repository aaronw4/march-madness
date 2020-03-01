const db = require('../data/dbConfig');

function add(team) {
    return db('teams')
        .insert(team, 'id')
}

function find() {
    return db('teams')
}

function remove(id) {
    return db('teams')
        .where({id})
}

module.exports = {
    add,
    find,
    remove
}