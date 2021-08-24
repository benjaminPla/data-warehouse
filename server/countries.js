import { sequelize } from "./server.js";

const countries = {
  dropTable: async () => {
    const sql = "DROP TABLE IF EXISTS countries;";
    return await sequelize.query(sql);
  },
  createTable: async () => {
    const sql =
      "CREATE TABLE countries (" +
      "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY," +
      "name VARCHAR(50) NOT NULL);";
    return await sequelize.query(sql);
  },
  insertInto: async () => {
    const sql =
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
      "(10, 'Indonesia');";
    return await sequelize.query(sql);
  },
  findAll: async () => {
    const sql = "SELECT * FROM countries WHERE 1;";
    return await sequelize.query(sql);
  },
  findOne: async (data) => {
    const sql = "SELECT * FROM countries WHERE id = :value OR name = :value;";
    return await sequelize.query(sql, { replacements: { value: data } });
  },
  post: async (data) => {
    const sql = "INSERT INTO countries (name) VALUES (?);";
    return await sequelize.query(sql, { replacements: [data] });
  },
  delete: async (data) => {
    const sql = "DELETE FROM countries WHERE id = :value OR name = :value;";
    return await sequelize.query(sql, { replacements: { value: data } });
  },
};

export { countries };
