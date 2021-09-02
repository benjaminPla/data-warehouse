const users = {
  dropTable: () => {
    return "DROP TABLE IF EXISTS users;";
  },
  createTable: () => {
    return (
      "CREATE TABLE IF NOT EXISTS users (" +
      "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY," +
      "first_name VARCHAR(50) NOT NULL," +
      "last_name VARCHAR(50) NOT NULL," +
      "position VARCHAR(50) NOT NULL," +
      "email VARCHAR(50) NOT NULL," +
      "company VARCHAR(50) NOT NULL);"
    );
  },
  insertInto: () => {
    return (
      "INSERT INTO users VALUES" +
      "(1, 'benjamin', 'pla', 'administrador', 'benjaminPla.dev@gmail.com', 'free lancer');"
    );
  },
};

export { users };
