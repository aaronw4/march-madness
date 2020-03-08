// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/teams.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://aoxnetcagsauno:81b3b999ba2558ee39a8b56a5919e9decc7178d69fb7ffc3d2f1920238a802ad@ec2-184-72-235-80.compute-1.amazonaws.com:5432/de2n227amjdm5g',
      user:     'aoxnetcagsauno',
      password: '81b3b999ba2558ee39a8b56a5919e9decc7178d69fb7ffc3d2f1920238a802ad'
    }
};
