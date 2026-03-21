const db = require('../data/dbConfig');

function addMany(teamsArray) {
    return db.batchInsert('teams', teamsArray, 30);
}

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
        .delete()
}

module.exports = {
    add,
    addMany,
    find,
    remove
}