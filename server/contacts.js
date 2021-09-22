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
    (1, 'Birdie', 'Anning', 1, 1, 'Marketing', 'Hackett and Sons', 1),
    (2, 'Jehu', 'Shevelin', 2, 2, 'Training', 'Goldner and Sons', 2),
    (3, 'Bayard', 'Phant', 3, 3, 'Legal', 'Kautzer-Ratke', 3),
    (4, 'Nessi', 'Sagg', 4, 4, 'Support', 'Bernhard Group', 4),
    (5, 'Malanie', 'Koba', 5, 5, 'Accounting', 'Hyatt, Adams and Stiedemann', 5),
    (6, 'Ailis', 'Vescovini', 6, 6, 'Research and Development', 'Hackett, Ratke and Bogisich', 6),
    (7, 'Helene', 'Blesdill', 7, 7, 'Legal', 'Kihn, Okuneva and Rosenbaum', 7),
    (8, 'Haroun', 'McFetridge', 8, 8, 'Accounting', 'Hoeger, Walker and Hodkiewicz', 8),
    (9, 'Tina', 'Ringsell', 9, 9, 'Support', 'Bernhard-Stroman', 9),
    (10, 'Kenna', 'Dugan', 10, 10, 'Legal', 'Rau, Carter and Upton', 10),
    (11, 'Stanislaus', 'O''Garmen', 11, 11, 'Accounting', 'Kunze and Sons', 11),
    (12, 'Lynnell', 'Drissell', 12, 12, 'Engineering', 'Pagac, Hegmann and Greenfelder', 12),
    (13, 'Heywood', 'Reah', 13, 13, 'Product Management', 'Hilpert Group', 13),
    (14, 'Kristine', 'Prichet', 14, 14, 'Business Development', 'Ondricka-Cruickshank', 14),
    (15, 'Cinda', 'Liveley', 15, 15, 'Legal', 'Grant and Sons', 15),
    (16, 'Eduard', 'De Blasiis', 16, 16, 'Services', 'Batz and Sons', 16),
    (17, 'Benoit', 'Latty', 17, 17, 'Training', 'Lockman, Lynch and Becker', 17),
    (18, 'Cornie', 'Gerwood', 18, 18, 'Human Resources', 'Howe, Feeney and Brakus', 18),
    (19, 'Beverly', 'Edling', 19, 19, 'Product Management', 'O''Hara, Langosh and Heathcote', 19),
    (20, 'Lise', 'Wraggs', 20, 20, 'Training', 'Bernhard LLC', 20),
    (21, 'Romeo', 'Bamblett', 21, 21, 'Training', 'Strosin, Schmidt and Gutkowski', 21),
    (22, 'Pascal', 'Dreossi', 22, 22, 'Research and Development', 'Spencer Inc', 22),
    (23, 'Kimberli', 'Treppas', 23, 23, 'Legal', 'Stroman and Sons', 23),
    (24, 'Leila', 'Mower', 24, 24, 'Services', 'Donnelly Group', 24),
    (25, 'Zora', 'Skitral', 25, 25, 'Sales', 'Stoltenberg LLC', 25),
    (26, 'Kimmi', 'Baumber', 26, 26, 'Services', 'Kreiger and Sons', 26),
    (27, 'Lorelei', 'Berney', 27, 27, 'Support', 'Skiles, Ortiz and Streich', 27),
    (28, 'Janine', 'Jiranek', 28, 28, 'Training', 'Cormier Inc', 28),
    (29, 'Mallory', 'Cauthra', 29, 29, 'Marketing', 'Parisian-Hane', 29),
    (30, 'Arly', 'Fulleylove', 30, 30, 'Engineering', 'Ernser, Pfannerstill and Watsica', 30),
    (31, 'Jed', 'Kleuer', 31, 31, 'Research and Development', 'Powlowski, Deckow and Corwin', 31),
    (32, 'Abraham', 'Ziemen', 32, 32, 'Product Management', 'Lindgren LLC', 32),
    (33, 'Olivette', 'Clemitt', 33, 33, 'Accounting', 'Hilll and Sons', 33),
    (34, 'Isabeau', 'Shoebrook', 34, 34, 'Services', 'Hegmann-Dare', 34),
    (35, 'Raine', 'Wyss', 35, 35, 'Engineering', 'Lang LLC', 35),
    (36, 'Nolan', 'Pickavant', 36, 36, 'Sales', 'Lesch-Morar', 36),
    (37, 'Kellen', 'Bitten', 37, 37, 'Legal', 'Medhurst Group', 37),
    (38, 'Vivianna', 'Tysall', 38, 38, 'Product Management', 'Heller, Rempel and Lindgren', 38),
    (39, 'Claudia', 'Dabner', 39, 39, 'Human Resources', 'Runolfsdottir, Turcotte and Beier', 39),
    (40, 'Parrnell', 'Marielle', 40, 40, 'Research and Development', 'Reichert Group', 40),
    (41, 'Simeon', 'Rowswell', 41, 41, 'Sales', 'Miller, Lang and Smith', 41),
    (42, 'Mikel', 'Cicchitello', 42, 42, 'Training', 'Lindgren-Brekke', 42),
    (43, 'Verile', 'Zanelli', 43, 43, 'Marketing', 'Rippin LLC', 43),
    (44, 'Evelyn', 'Eady', 44, 44, 'Product Management', 'Tremblay-Koepp', 44),
    (45, 'Fraze', 'Leonarde', 45, 45, 'Training', 'O''Conner-Mayer', 45),
    (46, 'Terrell', 'Palay', 46, 46, 'Research and Development', 'Hyatt, Swaniawski and Lind', 46),
    (47, 'Alayne', 'Meyrick', 47, 47, 'Human Resources', 'Monahan, Tromp and Reinger', 47),
    (48, 'Angie', 'Scedall', 48, 48, 'Marketing', 'Abshire Group', 48),
    (49, 'Othilia', 'Quilligan', 49, 49, 'Accounting', 'Funk Inc', 49),
    (50, 'Catlaina', 'Inde', 50, 50, 'Product Management', 'Erdman Inc', 50),
    (51, 'Zsa zsa', 'Laurant', 51, 51, 'Product Management', 'Feil-Kuhic', 51),
    (52, 'Magdalena', 'Abdey', 52, 52, 'Training', 'Abernathy-Leffler', 52),
    (53, 'Mandie', 'Houlison', 53, 53, 'Engineering', 'Davis, Witting and Aufderhar', 53),
    (54, 'Emmalee', 'Chater', 54, 54, 'Training', 'Lowe-Deckow', 54),
    (55, 'Indira', 'McKitterick', 55, 55, 'Human Resources', 'Krajcik and Sons', 55),
    (56, 'Kit', 'Melior', 56, 56, 'Business Development', 'Hammes, Denesik and Gleichner', 56),
    (57, 'Hillery', 'Manhare', 57, 57, 'Training', 'Shanahan, Murray and MacGyver', 57),
    (58, 'Zuzana', 'Cammack', 58, 58, 'Legal', 'Rowe Inc', 58),
    (59, 'Lucilia', 'Cubbinelli', 59, 59, 'Support', 'Gerlach and Sons', 59),
    (60, 'Sapphire', 'Tock', 60, 60, 'Legal', 'Torphy, Batz and O''Reilly', 60),
    (61, 'Rem', 'Bortolussi', 61, 61, 'Business Development', 'Spinka-Trantow', 61),
    (62, 'Dario', 'Boyall', 62, 62, 'Human Resources', 'Rodriguez, Kunde and Hodkiewicz', 62),
    (63, 'Waylon', 'Catley', 63, 63, 'Support', 'Schmidt-Luettgen', 63),
    (64, 'Joachim', 'Ashbolt', 64, 64, 'Human Resources', 'Hills, Wisoky and Walter', 64),
    (65, 'Panchito', 'Braybrooke', 65, 65, 'Research and Development', 'Jerde, Hahn and Olson', 65),
    (66, 'Jessalyn', 'Sumshon', 66, 66, 'Human Resources', 'Wilderman Group', 66),
    (67, 'Anna', 'D''Agostini', 67, 67, 'Legal', 'Franecki Inc', 67),
    (68, 'Dniren', 'Fromant', 68, 68, 'Product Management', 'Monahan-Roob', 68),
    (69, 'Merola', 'Lumsdon', 69, 69, 'Business Development', 'Bahringer-Johnston', 69),
    (70, 'Shelba', 'Tuxsell', 70, 70, 'Accounting', 'Howell-Metz', 70),
    (71, 'Kathlin', 'Vasyutkin', 71, 71, 'Sales', 'Pollich-Jast', 71),
    (72, 'Adrea', 'Pozzo', 72, 72, 'Legal', 'Kutch, Erdman and Quigley', 72),
    (73, 'Kaspar', 'Ebbs', 73, 73, 'Legal', 'Hessel, Homenick and Gaylord', 73),
    (74, 'Myrle', 'Grinham', 74, 74, 'Engineering', 'Klocko Inc', 74),
    (75, 'Merilyn', 'Rewcastle', 75, 75, 'Sales', 'Mohr, Crist and Larson', 75),
    (76, 'Kliment', 'Evill', 76, 76, 'Engineering', 'Schumm-Thiel', 76),
    (77, 'Burty', 'Puttan', 77, 77, 'Engineering', 'Schaefer, Kessler and Padberg', 77),
    (78, 'Melvin', 'Okenden', 78, 78, 'Services', 'Hermann-McKenzie', 78),
    (79, 'Obadiah', 'Marzelle', 79, 79, 'Human Resources', 'Wisozk LLC', 79),
    (80, 'Fair', 'Huertas', 80, 80, 'Human Resources', 'Blick, O''Conner and McKenzie', 80),
    (81, 'Evey', 'Czaja', 81, 81, 'Research and Development', 'Boehm and Sons', 81),
    (82, 'Benedikt', 'Sands-Allan', 82, 82, 'Product Management', 'Rutherford-Hilll', 82),
    (83, 'Tann', 'Hogbin', 83, 83, 'Marketing', 'Jerde and Sons', 83),
    (84, 'Kikelia', 'Baptist', 84, 84, 'Support', 'Stroman LLC', 84),
    (85, 'Moria', 'Edinburgh', 85, 85, 'Research and Development', 'Connelly and Sons', 85),
    (86, 'Reinhard', 'Canby', 86, 86, 'Support', 'Dare-Doyle', 86),
    (87, 'Fabian', 'Arnaudet', 87, 87, 'Support', 'Grant and Sons', 87),
    (88, 'Woodman', 'Drummond', 88, 88, 'Sales', 'McClure-Becker', 88),
    (89, 'Gardner', 'McInteer', 89, 89, 'Product Management', 'Larkin Inc', 89),
    (90, 'May', 'Stranks', 90, 90, 'Marketing', 'Mills, Bechtelar and Kovacek', 90),
    (91, 'Wash', 'Dawson', 91, 91, 'Marketing', 'Mitchell-Hauck', 91),
    (92, 'Christophorus', 'Plumley', 92, 92, 'Human Resources', 'Bashirian Group', 92),
    (93, 'Valeda', 'Froome', 93, 93, 'Training', 'Heaney Group', 93),
    (94, 'Stearn', 'Dolby', 94, 94, 'Engineering', 'Hahn Group', 94),
    (95, 'Daisie', 'Aysik', 95, 95, 'Human Resources', 'Moore Inc', 95),
    (96, 'Nonie', 'Chapiro', 96, 96, 'Engineering', 'Sporer, Beahan and Thiel', 96),
    (97, 'Town', 'Halbord', 97, 97, 'Sales', 'Grant LLC', 97),
    (98, 'Keely', 'Antonat', 98, 98, 'Training', 'Spencer-Botsford', 98),
    (99, 'Raphael', 'Gibbin', 99, 99, 'Accounting', 'Considine-Kris', 99),
    (100, 'Nananne', 'Emmerson', 100, 100, 'Marketing', 'Morissette, Kerluke and Upton', 100);`);
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
