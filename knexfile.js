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
      database: process.env.DATABASE_URL,
      user:     'aoxnetcagsauno',
      password: '81b3b999ba2558ee39a8b56a5919e9decc7178d69fb7ffc3d2f1920238a802ad'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}
