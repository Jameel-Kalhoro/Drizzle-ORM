const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'clients',
    password: '5847',
    port: 5432,
  });

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
}
);

module.exports = client;
