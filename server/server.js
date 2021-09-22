import { Sequelize } from "sequelize";
import { regions } from "./regions.js";
import { countries } from "./countries.js";
import { cities } from "./cities.js";
import { users } from "./users.js";
import { contacts } from "./contacts.js";
import { companies } from "./companies.js";

const sequelize = new Sequelize("data_warehouse", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
  define: {
    freezeTableName: true,
  },
});
await sequelize.authenticate(console.log("sequelize on"));

cities
  .dropTable()
  .then(() => countries.dropTable())
  .then(() => regions.dropTable())
  .then(() => regions.createTable())
  .then(() => regions.insertInto())
  .then(() => countries.createTable())
  .then(() => countries.insertInto())
  .then(() => cities.createTable())
  .then(() => cities.insertInto())
  .then(() => users.dropTable())
  .then(() => users.createTable())
  .then(() => users.insertInto())
  .then(() => companies.dropTable())
  .then(() => companies.createTable())
  .then(() => companies.insertInto())
  .then(() => contacts.dropTable())
  .then(() => contacts.createTable())
  .then(() => contacts.insertInto());

export { sequelize };
