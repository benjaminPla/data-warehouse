import { Sequelize } from "sequelize";
import { countries } from "./countries.js";
import { users } from "./users.js";

const sequelize = new Sequelize("data_warehouse", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
  define: {
    freezeTableName: true,
  },
});

await sequelize.authenticate(console.log("sequelize on"));

// countries.dropTable();
// countries.createTable();
// countries.insertInto();

// await sequelize.query(users.dropTable());
// await sequelize.query(users.createTable());
// await sequelize.query(users.insertInto());

export { sequelize };
