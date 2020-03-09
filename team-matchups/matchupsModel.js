const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'aoxnetcagsauno',
    host: 'ec2-184-72-235-80.compute-1.amazonaws.com',
    database: 'de2n227amjdm5g',
    password: '81b3b999ba2558ee39a8b56a5919e9decc7178d69fb7ffc3d2f1920238a802ad',
    port: 5432
});

function add(teams) {
    pool.query(`INSERT INTO matchups VALUES(${teams})`, (err, res) => {
        console.log(err, res);
        pool.end()
    })
};

function find() {
    pool.query('SELECT * FROM matchups', (err, res) => {
        console.log(err, res);
        pool.end()
    })
};

function remove(id) {
    pool.query(`DELETE FROM matchups WHERE id=${id}`, (err, res) => {
        console.log(err, res);
        pool.end()
    })
}

// const db = require('../data/dbConfig');

// function add(teams) {
//     return db('matchups')
//         .insert(teams, 'id')
// }

// function find() {
//     return db('matchups')
// }

// function remove(id) {
//     return db('matchups')
//         .where({id})
//         .delete()
// }

module.exports = {
    add,
    find,
    remove
}