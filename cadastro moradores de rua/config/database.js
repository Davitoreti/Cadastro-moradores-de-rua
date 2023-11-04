const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'davitoreti',
      password : '123456',
      database : 'cadastromoradores_de_rua'
    }
  });
  module.exports = knex;