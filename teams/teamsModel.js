const {Client} = require('pg');

const client = new Client({
    user: 'aoxnetcagsauno',
    password: '81b3b999ba2558ee39a8b56a5919e9decc7178d69fb7ffc3d2f1920238a802ad',
    host: 'ec2-184-72-235-80.compute-1.amazonaws.com',
    database: 'de2n227amjdm5g',
    port: 5432
});

function add(team) {
    client.connect()
        .then(() => client.query(`INSERT INTO teams VALUES(${team})`))
        .then(() => )
        .catch(err => console.log(err))
        .finally(() => client.end())
}

module.exports = {
    add,
    // find,
    // remove
}