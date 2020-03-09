const db = require('../data/dbConfig');

function add(team) {
    return db('postgresql-flexible-45644')
        .insert(team, 'id')
}

function find() {
    return db('postgresql-flexible-45644')
}

function remove(id) {
    return db('postgresql-flexible-45644')
        .where({id})
        .delete()
}

module.exports = {
    add,
    find,
    remove
}