import { sequelize } from "./server.js";

const cities = {
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS cities ( " +
        "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "name VARCHAR(50) NOT NULL, " +
        "country_id INT NOT NULL, " +
        "FOREIGN KEY (country_id) REFERENCES countries (id) " +
        "ON DELETE CASCADE " +
        "ON UPDATE CASCADE " +
        ");"
    );
  },
  insertInto: async () => {
    await sequelize.query(
      "INSERT INTO cities VALUES" +
        "(1, 'Breves', 3)," +
        "(2, 'Hausjärvi', 3)," +
        "(3, 'Belköl', 4)," +
        "(4, 'Sindangan', 3)," +
        "(5, 'Châlons-en-Champagne', 1)," +
        "(6, 'Lykóvrysi', 1)," +
        "(7, 'Kawm Ḩamādah', 5)," +
        "(8, 'Miguel Hidalgo', 1)," +
        "(9, 'Mar del Plata', 4)," +
        "(10, 'Grästorp', 2);"
    );
  },
  findAll: async () => {
    return await sequelize.query("SELECT * FROM cities WHERE 1;", {
      type: "SELECT",
    });
  },
  findByName: async (data) => {
    return await sequelize.query("SELECT * FROM cities WHERE name = ?", {
      replacements: [data],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query("INSERT INTO cities (name) VALUES (?);", {
      replacements: [data],
    });
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM cities WHERE name = ?;", {
      replacements: [data],
    });
  },
  put: async (data) => {
    await sequelize.query("UPDATE cities SET name = ? WHERE name = ?;", {
      replacements: [data.newName, data.name],
    });
  },
};

export { cities };
