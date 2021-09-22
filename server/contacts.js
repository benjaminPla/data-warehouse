import { sequelize } from "./server.js";

const contacts = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS contacts;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS contacts " +
        "(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "first_name VARCHAR(50) NOT NULL, " +
        "last_name VARCHAR(50) NOT NULL, " +
        "city_id INT NOT NULL, " +
        "company_id INT NOT NULL, " +
        "role VARCHAR(50) NOT NULL, " +
        "media VARCHAR(100) NOT NULL, " +
        "interest INT NOT NULL);"
    );
  },
  insertInto: async () => {
    await sequelize.query(`
  INSERT INTO contacts VALUES
  (1, 'Prinz', 'Moors', 5, 34, 'Surveyor', 'Volkman Group', 50),
  (2, 'Rockwell', 'Canby', 2, 20, 'Electrician', 'Cremin-Weimann', 50),
  (3, 'Rafe', 'Gosenell', 9, 30, 'Engineer', 'Berge Group', 50),
  (4, 'Andrea', 'Lindegard', 9, 10, 'Electrician', 'Schroeder-Herzog', 75),
  (5, 'Junia', 'Jakubowsky', 1, 44, 'Surveyor', 'Jacobs, Langosh and Wolff', 0),
  (6, 'Mariellen', 'Pyrah', 10, 47, 'Subcontractor', 'Waters-Predovic', 75),
  (7, 'Gran', 'Boram', 7, 33, 'Supervisor', 'Effertz and Sons', 75),
  (8, 'Jose', 'Sneath', 1, 12, 'Construction Foreman', 'Brown, Kovacek and Rodriguez', 100),
  (9, 'Harriot', 'Drewson', 10, 47, 'Construction Expeditor', 'Jacobs, Ratke and Keeling', 25),
  (10, 'Darleen', 'Kearn', 1, 17, 'Supervisor', 'Frami and Sons', 50),
  (11, 'Cass', 'Filshin', 7, 42, 'Engineer', 'Ruecker, Conn and Jakubowski', 75),
  (12, 'Miguela', 'Avrashin', 4, 43, 'Construction Expeditor', 'Reichel-Graham', 100),
  (13, 'Nicol', 'Olennikov', 3, 39, 'Electrician', 'Fritsch and Sons', 50),
  (14, 'Shellysheldon', 'Anthony', 9, 4, 'Subcontractor', 'Jacobi-Roberts', 50),
  (15, 'Danell', 'Briars', 10, 30, 'Architect', 'Schamberger, Jerde and Kshlerin', 75),
  (16, 'Haven', 'Wehden', 7, 36, 'Engineer', 'Romaguera-Auer', 50),
  (17, 'Cele', 'O''Regan', 8, 41, 'Construction Manager', 'Beahan and Sons', 75),
  (18, 'Karlens', 'Klimke', 2, 22, 'Estimator', 'Bode, Friesen and Stamm', 50),
  (19, 'Levy', 'Valero', 6, 20, 'Construction Expeditor', 'Quitzon Group', 50),
  (20, 'Eryn', 'McCullock', 4, 6, 'Electrician', 'Hamill-Volkman', 0),
  (21, 'Jeanette', 'Renbold', 3, 35, 'Electrician', 'Schaden-Kessler', 50),
  (22, 'Alissa', 'Pach', 10, 48, 'Engineer', 'Kulas, Ferry and Marquardt', 50),
  (23, 'Ardenia', 'O''Gavin', 8, 22, 'Subcontractor', 'Wuckert-Kassulke', 50),
  (24, 'Marchall', 'Burston', 8, 11, 'Construction Foreman', 'Wintheiser-Fadel', 25),
  (25, 'Gar', 'Stedman', 6, 34, 'Electrician', 'Lindgren LLC', 25),
  (26, 'Danyette', 'Queripel', 8, 15, 'Construction Manager', 'Hoppe, Kirlin and Bednar', 75),
  (27, 'Cecilio', 'Wormell', 4, 6, 'Surveyor', 'Runolfsdottir LLC', 50),
  (28, 'Tye', 'Rusk', 4, 46, 'Construction Foreman', 'Boyer Group', 25),
  (29, 'Tedman', 'Frane', 6, 13, 'Construction Manager', 'Marvin Inc', 50),
  (30, 'Modesta', 'Haldon', 8, 22, 'Estimator', 'Deckow-Simonis', 25),
  (31, 'Archie', 'Hurtado', 6, 13, 'Surveyor', 'Effertz, Fritsch and Ortiz', 50),
  (32, 'Minor', 'Caren', 1, 31, 'Architect', 'King, Turner and Leuschke', 0),
  (33, 'Paulie', 'Ashbrook', 2, 47, 'Estimator', 'Hamill, Hoeger and Hahn', 75),
  (34, 'Blondell', 'Davidovics', 7, 22, 'Supervisor', 'Considine-Mraz', 25),
  (35, 'Clementine', 'Goggan', 9, 25, 'Construction Worker', 'Terry Inc', 25),
  (36, 'Clarabelle', 'Farmar', 7, 34, 'Subcontractor', 'Davis, Smith and Nienow', 100),
  (37, 'Demetrius', 'Kupper', 10, 12, 'Electrician', 'Klocko LLC', 100),
  (38, 'Regina', 'Langdale', 2, 37, 'Project Manager', 'Fisher-Koepp', 50),
  (39, 'Edik', 'Rattery', 2, 19, 'Architect', 'Dibbert and Sons', 75),
  (40, 'Neala', 'Jeenes', 8, 8, 'Subcontractor', 'Turcotte, Windler and Runte', 0),
  (41, 'Launce', 'Rannie', 9, 7, 'Construction Worker', 'Waters-Koch', 100),
  (42, 'Quincey', 'Gorce', 5, 30, 'Electrician', 'Luettgen-McLaughlin', 100),
  (43, 'Yves', 'Meenan', 1, 48, 'Estimator', 'O''Reilly, Schroeder and Rice', 25),
  (44, 'Lorenza', 'Lob', 1, 25, 'Estimator', 'Koss LLC', 25),
  (45, 'Vito', 'Corballis', 5, 43, 'Surveyor', 'Cormier, Gutkowski and Hyatt', 50),
  (46, 'Haskell', 'Stracey', 8, 16, 'Project Manager', 'Kuhn, Schmidt and Fisher', 50),
  (47, 'Darill', 'Suttill', 6, 24, 'Construction Foreman', 'Klocko-Wiegand', 25),
  (48, 'Madelon', 'Murcutt', 9, 48, 'Engineer', 'Nitzsche, Cormier and McCullough', 50),
  (49, 'Sonnie', 'Keenlyside', 9, 3, 'Project Manager', 'Murray Group', 25),
  (50, 'Garik', 'Gifford', 4, 20, 'Construction Expeditor', 'Dare and Sons', 25),
  (51, 'Gav', 'Geerling', 1, 30, 'Construction Worker', 'Reilly, White and Howe', 50),
  (52, 'Bax', 'Adelberg', 5, 50, 'Construction Foreman', 'Erdman, Quitzon and Bailey', 75),
  (53, 'Britney', 'Job', 8, 3, 'Supervisor', 'Will Inc', 50),
  (54, 'Derron', 'Howsley', 1, 43, 'Construction Expeditor', 'Abbott-Cartwright', 75),
  (55, 'Tonie', 'Faldoe', 10, 18, 'Architect', 'Ondricka and Sons', 0),
  (56, 'Michaeline', 'Pisculli', 1, 33, 'Engineer', 'Muller-Casper', 75),
  (57, 'Larine', 'McAvaddy', 8, 16, 'Surveyor', 'Ondricka-Connelly', 0),
  (58, 'Perle', 'Carlos', 3, 46, 'Estimator', 'Grady-Crona', 25),
  (59, 'Jena', 'Bridgen', 7, 4, 'Construction Manager', 'Veum, Schimmel and Kuhlman', 75),
  (60, 'Dov', 'Hoggin', 3, 36, 'Engineer', 'Nikolaus Inc', 50),
  (61, 'Carlene', 'Presslie', 10, 22, 'Architect', 'Hammes, Feil and Wiegand', 0),
  (62, 'Morley', 'Egerton', 9, 20, 'Engineer', 'Dibbert, Little and Romaguera', 25),
  (63, 'Joleen', 'Chooter', 3, 40, 'Construction Foreman', 'Ryan Group', 50),
  (64, 'Bill', 'Begbie', 4, 2, 'Electrician', 'Gutkowski-Ebert', 50),
  (65, 'Cherida', 'Claffey', 8, 48, 'Project Manager', 'DuBuque-Cruickshank', 50),
  (66, 'Ariadne', 'Luety', 3, 17, 'Construction Worker', 'Kerluke, Harris and Dietrich', 50),
  (67, 'Kim', 'Elsdon', 2, 14, 'Construction Foreman', 'Hyatt, Deckow and Yost', 50),
  (68, 'Nial', 'Wemes', 7, 41, 'Construction Worker', 'O''Keefe and Sons', 25),
  (69, 'Norean', 'Plant', 3, 3, 'Construction Expeditor', 'Considine, Rippin and Hickle', 75),
  (70, 'Gray', 'Teeney', 8, 46, 'Surveyor', 'Robel Group', 50),
  (71, 'Kelley', 'Krysztofiak', 7, 3, 'Construction Worker', 'Block, Crist and D''Amore', 0),
  (72, 'Haleigh', 'Jackman', 7, 39, 'Supervisor', 'Leuschke Group', 25),
  (73, 'Danni', 'Geffinger', 2, 3, 'Surveyor', 'Schmidt-Kohler', 25),
  (74, 'Pen', 'Brockwell', 5, 19, 'Estimator', 'Powlowski LLC', 75),
  (75, 'Clerissa', 'Ullett', 6, 5, 'Electrician', 'Carter-Davis', 100),
  (76, 'Yulma', 'Frick', 10, 14, 'Estimator', 'Gulgowski and Sons', 75),
  (77, 'Renate', 'Kingswood', 3, 42, 'Construction Worker', 'Walsh, Senger and Raynor', 25),
  (78, 'Shane', 'D''Emanuele', 10, 4, 'Architect', 'Mayert and Sons', 25),
  (79, 'Jamima', 'Finders', 1, 31, 'Electrician', 'Graham LLC', 25),
  (80, 'Brana', 'Wallice', 10, 12, 'Construction Foreman', 'Schuppe-Ondricka', 25),
  (81, 'Haroun', 'Winsborrow', 2, 22, 'Subcontractor', 'Koch-Ebert', 50),
  (82, 'Jason', 'Colaco', 1, 11, 'Project Manager', 'Harvey, Wiza and Ferry', 25),
  (83, 'Elfreda', 'Tribble', 1, 39, 'Project Manager', 'Pfannerstill, Emmerich and Hammes', 75),
  (84, 'Elyse', 'Antoni', 1, 22, 'Electrician', 'Klocko-Bruen', 100),
  (85, 'Redford', 'Tithecote', 8, 39, 'Subcontractor', 'Senger-Lebsack', 25),
  (86, 'Flinn', 'Strafen', 1, 46, 'Supervisor', 'Hansen Inc', 50),
  (87, 'Ramsey', 'Howes', 5, 16, 'Engineer', 'Hirthe-Corwin', 50),
  (88, 'Galina', 'Doblin', 2, 8, 'Electrician', 'Labadie, Walsh and Effertz', 75),
  (89, 'Ewart', 'Gianilli', 5, 4, 'Estimator', 'Collins Inc', 75),
  (90, 'Justinian', 'Fowls', 10, 20, 'Electrician', 'Leffler and Sons', 0),
  (91, 'Mason', 'Kapiloff', 10, 9, 'Supervisor', 'Glover-Grimes', 50),
  (92, 'Leonelle', 'Middlebrook', 2, 27, 'Estimator', 'Daugherty, Weissnat and Lakin', 100),
  (93, 'Caria', 'Blaasch', 6, 35, 'Engineer', 'Koepp, Dooley and Kutch', 75),
  (94, 'Willdon', 'Carous', 10, 9, 'Construction Expeditor', 'Ryan Inc', 50),
  (95, 'Broderick', 'Dimblebee', 1, 32, 'Engineer', 'Hansen LLC', 25),
  (96, 'Isaak', 'Veazey', 8, 16, 'Electrician', 'Kuvalis-Huel', 75),
  (97, 'Matti', 'Tolley', 4, 32, 'Electrician', 'Hintz-Oberbrunner', 75),
  (98, 'Cecilius', 'Smitherham', 7, 20, 'Construction Worker', 'Haley Group', 25),
  (99, 'Dillon', 'Geeves', 8, 37, 'Construction Manager', 'Schroeder LLC', 0),
  (100, 'Aurel', 'Utton', 5, 35, 'Construction Worker', 'Borer, Bernier and Kozey', 75);`);
  },
  findAll: async () => {
    return await sequelize.query("SELECT * FROM contacts WHERE 1;", { type: "SELECT" });
  },
  findById: async (data) => {
    return await sequelize.query("SELECT * FROM contacts WHERE id = ?;", {
      replacements: [data.id],
      type: "SELECT",
    });
  },
  findByFullName: async (data) => {
    return await sequelize.query("SELECT * FROM contacts WHERE first_name = ? AND last_name = ?;", {
      replacements: [data.first_name, data.last_name],
      type: "SELECT",
    });
  },
  post: async (data) => {
    await sequelize.query(
      "INSERT INTO contacts " +
        "(first_name, last_name, city_id, company_id, role, media, interest) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?);",
      {
        replacements: [
          data.first_name,
          data.last_name,
          data.city_id,
          data.company_id,
          data.role,
          data.media,
          data.interest,
        ],
      }
    );
  },
  deleteById: async (data) => {
    await sequelize.query("DELETE FROM contacts WHERE id = ?;", {
      replacements: [data.id],
    });
  },
  put: async (data) => {
    await sequelize.query(
      "UPDATE contacts SET " +
        "first_name = ?, last_name = ?, city_id = ?, company_id = ?, role = ?, media = ?, interest = ? " +
        "WHERE id = ?;",
      {
        replacements: [
          data.first_name,
          data.last_name,
          data.city_id,
          data.company_id,
          data.role,
          data.media,
          data.interest,
          data.id,
        ],
      }
    );
  },
};

export { contacts };
