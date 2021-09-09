import { Sequelize } from "sequelize";
import { regions } from "./regions.js";
import { countries } from "./countries.js";
import { cities } from "./cities.js";

const sequelize = new Sequelize("data_warehouse", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
  define: {
    freezeTableName: true,
  },
});
await sequelize.authenticate(console.log("sequelize on"));

// regions.createTable().then(() => regions.insertInto());
// countries.createTable().then(() => countries.insertInto());
// cities.createTable().then(() => cities.insertInto());

export { sequelize };
