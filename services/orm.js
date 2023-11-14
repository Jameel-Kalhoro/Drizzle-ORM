const {drizzle} = require ('drizzle-orm/postgres-js');
const postgres =require('postgres');
const table = require ("drizzle-orm/pg-core");
const schema = require('../models/client');

const queryClient = postgres("postgres://postgres:5847@localhost:5432/clients");
//console.log(schema.mySchemaUsers)
// const newTable = table.pgTable('clients', {
//     id: table.serial('id').primaryKey(),
//     ownerName: table.text('ownerName'),
//     name: table.text('name'),
//     displayName: table.text('displayName'),
//     discription: table.text('description'),
//     number: table.text('number'),
//     location: table.text('location'),
// });

const mySchema = table.pgSchema("my_schema")
 
const mySchemaUsers = mySchema.table('clients', {
  id: table.serial('id').primaryKey(),
  ownerName: table.text('ownerName'),
  name: table.text('name'),
  displayName: table.text('displayName'),
  discription: table.text('description'),
  number: table.text('number'),
  location: table.text('location'),
});

const db = drizzle(queryClient, {
    mySchema: mySchema,
    mySchemaUsers: mySchemaUsers,
});
console.log(queryClient);


module.exports = db;