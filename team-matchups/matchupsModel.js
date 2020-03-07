const db = require('../data/dbConfig');

function add(teams) {
    return db('matchups')
        .insert(teams, 'id')
}

function find() {
    return db('matchups')
}

function remove(id) {
    return db('mathups')
        .where({id})
        .delete()
}

module.exports = {
    add,
    find,
    remove
}