import { sequelize } from "./server.js";

const countries = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS countries;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS countries (" +
        "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY," +
        "name VARCHAR(50) NOT NULL);"
    );
  },
  insertInto: async () => {
    await sequelize.query(
      "INSERT INTO countries VALUES" +
        "(1, 'Philippines')," +
        "(2, 'China')," +
        "(3, 'Sweden')," +
        "(4, 'Sri Lanka')," +
        "(5, 'Argentina')," +
        "(6, 'Bolivia')," +
        "(7, 'Ukraine')," +
        "(8, 'Colombia')," +
        "(9, 'Portugal')," +
        "(10, 'Indonesia');"
    );
  },
  findAll: async () => {
    return await sequelize.query("SELECT * FROM countries WHERE 1;", {
      type: "SELECT",
    });
  },
  findOne: async (data) => {
    return await sequelize.query(
      "SELECT * FROM countries WHERE id = :value OR name = :value;",
      { replacements: { value: data }, type: "SELECT" }
    );
  },
  post: async (data) => {
    await sequelize.query("INSERT INTO countries (name) VALUES (?);", {
      replacements: [data],
    });
  },
  delete: async (data) => {
    await sequelize.query(
      "DELETE FROM countries WHERE id = :value OR name = :value;",
      { replacements: { value: data } }
    );
  },
  put: async (data) => {
    await sequelize.query(
      "UPDATE countries SET name = :put WHERE id = :idOrName OR name = :idOrName;",
      {
        replacements: { put: data.put, idOrName: data.idOrName },
        type: "UPDATE",
      }
    );
  },
};

export { countries };
