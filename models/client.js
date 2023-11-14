const sch = require ("drizzle-orm/pg-core");
 
const mySchema = sch.pgSchema("my_schema")
 
const mySchemaUsers = mySchema.table('clients', {
  id: sch.serial('id').primaryKey(),
  ownerName: sch.text('ownerName'),
  name: sch.text('name'),
  displayName: sch.text('displayName'),
  discription: sch.text('description'),
  number: sch.text('number'),
  location: sch.text('location'),
});


module.exports =  {mySchema, mySchemaUsers};