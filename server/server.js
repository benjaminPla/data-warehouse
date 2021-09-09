import { Sequelize } from "sequelize";
import { countries } from "./countries.js";
import { regions } from "./regions.js";

const sequelize = new Sequelize("data_warehouse", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
  define: {
    freezeTableName: true,
  },
});
await sequelize.authenticate(console.log("sequelize on"));

countries
  .dropTable()
  .then(() => countries.createTable())
  .then(() => countries.insertInto());

regions
  .dropTable()
  .then(() => regions.createTable())
  .then(() => regions.insertInto());

export { sequelize };
