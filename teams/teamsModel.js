const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'aoxnetcagsauno',
    host: 'ec2-184-72-235-80.compute-1.amazonaws.com',
    database: 'de2n227amjdm5g',
    password: '81b3b999ba2558ee39a8b56a5919e9decc7178d69fb7ffc3d2f1920238a802ad',
    port: 5432
});

function add(team) {
    pool.query(`INSERT INTO teams VALUES(${team})`, (err, res) => {
        console.log(err, res);
    })
};

function find() {
    pool.query('SELECT * FROM teams', (err, res) => {
        console.log(err, res);
    })
};

function remove(id) {
    pool.query(`DELETE FROM teams WHERE id=${id}`, (err, res) => {
        console.log(err, res);
        pool.end()
    })
}

// const db = require('../data/dbConfig');

// function add(team) {
//     return db('teams')
//         .insert(team, 'id')
// }

// function find() {
//     return db('teams')
// }

// function remove(id) {
//     return db('teams')
//         .where({id})
//         .delete()
// }

module.exports = {
    add,
    find,
    remove
}