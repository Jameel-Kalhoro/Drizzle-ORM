import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("my_schema")
 
export const mySchemaUsers = mySchema.table('clients', {
  id: serial('id').primaryKey(),
  ownerName: text('ownerName'),
  name: text('name'),
  displayName: text('displayName'),
  discription: text('description'),
  number: text('number'),
  location: text('location'),
});
