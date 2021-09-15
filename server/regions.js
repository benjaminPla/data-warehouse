import { sequelize } from "./server.js";

const regions = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS regions;");
  },
  createTable: async () => {
    await sequelize.query("CREATE TABLE IF NOT EXISTS regions (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL);");
  },
  insertInto: async () => {
    await sequelize.query(
      "INSERT INTO regions VALUES" +
        "(1, 'América del Norte')," +
        " (2, 'América Central')," +
        " (3, 'América del Sur')," +
        " (4, 'África')," +
        " (5, 'Europa')," +
        " (6, 'Oceanía')," +
        " (7, 'Asia');"
    );
  },
  findAll: async () => {
    return await sequelize.query("SELECT * FROM regions WHERE 1;", {
      type: "SELECT",
    });
  },
  findById: async (data) => {
    return await sequelize.query("SELECT * FROM regions WHERE id = ?", {
      replacements: [data],
      type: "SELECT",
    });
  },
  findByName: async (data) => {
    return await sequelize.query("SELECT * FROM regions WHERE name = ?", {
      replacements: [data],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query("INSERT INTO regions (name) VALUES (?);", {
      replacements: [data],
    });
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM regions WHERE name = ?;", {
      replacements: [data],
    });
  },
  put: async (data) => {
    await sequelize.query("UPDATE regions SET name = ? WHERE name = ?;", {
      replacements: [data.newName, data.name],
    });
  },
};

export { regions };
