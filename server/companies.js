import { sequelize } from "./server.js";

const companies = {
  dropTable: async () => {
    await sequelize.query("DROP TABLE IF EXISTS companies;");
  },
  createTable: async () => {
    await sequelize.query(
      "CREATE TABLE IF NOT EXISTS companies (" +
        "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
        "name VARCHAR(50) NOT NULL, " +
        "adress VARCHAR(50) NOT NULL, " +
        "city_id INT NOT NULL, " +
        "email VARCHAR(50), " +
        "phone_number VARCHAR(50));"
    );
  },
  insertInto: async () => {
    await sequelize.query(`
    INSERT INTO companies VALUES
    (1, 'Babbleblab', '8 3rd Way', 1, 'fsiddons0@symantec.com', '825-455-3127'),
    (2, 'Zoomlounge', '737 Marcy Court', 2, 'cpickring1@elegantthemes.com', '852-289-7769'),
    (3, 'Meembee', '7 Bunting Plaza', 3, 'rvenables2@google.com.hk', '278-483-2789'),
    (4, 'Ailane', '5550 Wayridge Road', 4, 'wsimmill3@imgur.com', '601-340-4125'),
    (5, 'Midel', '68 Doe Crossing Terrace', 5, 'clovel4@i2i.jp', '385-717-6988'),
    (6, 'Skivee', '47513 Farmco Drive', 6, 'dplunkett5@economist.com', '895-799-9464'),
    (7, 'InnoZ', '9519 Waubesa Pass', 7, 'stefft6@slate.com', '726-113-1377'),
    (8, 'Yodo', '9 Marquette Drive', 8, 'gfordy7@4shared.com', '234-747-8966'),
    (9, 'Devshare', '2 Clemons Way', 9, 'gpharoah8@marketwatch.com', '435-966-3380'),
    (10, 'Chatterbridge', '39 Eggendart Drive', 10, 'cguerre9@netscape.com', '506-463-1985'),
    (11, 'Lazz', '44234 Schmedeman Circle', 11, 'kreadera@hc360.com', '551-185-7193'),
    (12, 'Voonyx', '82 Pleasure Parkway', 12, 'ahiggonetb@odnoklassniki.ru', '204-454-8367'),
    (13, 'Meeveo', '478 Reinke Terrace', 13, 'fbairnsfatherc@hp.com', '889-794-1937'),
    (14, 'Ozu', '1 Moose Parkway', 14, 'oseabridged@ibm.com', '230-578-3463'),
    (15, 'Devpulse', '24 Onsgard Court', 15, 'pbanthame@aboutads.info', '686-539-2494'),
    (16, 'Mybuzz', '718 Oakridge Drive', 16, 'awoodruffef@stumbleupon.com', '192-649-6190'),
    (17, 'Yozio', '0768 Summer Ridge Junction', 17, 'lrobelowg@naver.com', '889-480-1861'),
    (18, 'Vipe', '1 Spohn Court', 18, 'peverissh@amazon.com', '474-889-6983'),
    (19, 'Flashspan', '22906 Derek Street', 19, 'edewitti@prlog.org', '719-725-9786'),
    (20, 'Rhynyx', '4 Erie Plaza', 20, 'rropartzj@delicious.com', '799-203-6516'),
    (21, 'Mybuzz', '58595 Meadow Valley Park', 21, 'mmattheisk@sun.com', '504-869-9743'),
    (22, 'Feedspan', '84 Jana Street', 22, 'zrizzardol@phpbb.com', '744-212-1946'),
    (23, 'Kayveo', '829 Texas Place', 23, 'hyatmanm@list-manage.com', '470-353-2281'),
    (24, 'Lazzy', '1 Basil Place', 24, 'ahearmonn@mozilla.com', '471-844-9857'),
    (25, 'Aivee', '3 Sunfield Road', 25, 'tstovingo@sun.com', '561-167-1235'),
    (26, 'Zoozzy', '645 Farmco Point', 26, 'myankeevp@cam.ac.uk', '695-629-1380'),
    (27, 'Wikibox', '8 Truax Place', 27, 'dbutfieldq@csmonitor.com', '617-588-1528'),
    (28, 'Eire', '3 Fuller Place', 28, 'mcrampinr@google.ca', '530-651-9414'),
    (29, 'Rhycero', '1 Shasta Court', 29, 'ikrolmans@github.com', '275-501-1415'),
    (30, 'Eadel', '01 Clove Circle', 30, 'crisborought@issuu.com', '850-637-5648'),
    (31, 'Kwideo', '2576 Glacier Hill Trail', 31, 'bblakeneyu@rambler.ru', '863-251-3361'),
    (32, 'Zoonoodle', '0464 Orin Point', 32, 'umcandiev@lulu.com', '558-222-2054'),
    (33, 'Shuffletag', '4230 Montana Hill', 33, 'sretchfordw@tmall.com', '712-130-8719'),
    (34, 'Tanoodle', '63511 Bashford Point', 34, 'rrickardx@eepurl.com', '288-525-9837'),
    (35, 'Yombu', '7797 Holmberg Lane', 35, 'lwhitteny@blogs.com', '698-234-6419'),
    (36, 'Gabtune', '5671 Pine View Hill', 36, 'mkingswoodez@uiuc.edu', '518-192-7419'),
    (37, 'Flashpoint', '0 Blackbird Junction', 37, 'rskirven10@guardian.co.uk', '768-500-4102'),
    (38, 'Browseblab', '5385 Katie Street', 38, 'bgoosnell11@people.com.cn', '886-747-9320'),
    (39, 'Pixoboo', '78 Sheridan Drive', 39, 'fkearsley12@phpbb.com', '974-493-2222'),
    (40, 'Flipbug', '39601 Green Ridge Center', 40, 'ksowrah13@geocities.com', '634-983-9678'),
    (41, 'Brightdog', '27 Westerfield Pass', 41, 'hphilippson14@kickstarter.com', '644-374-9161'),
    (42, 'Yadel', '19 Sherman Lane', 42, 'jiwanowicz15@cnbc.com', '151-788-4310'),
    (43, 'Wordware', '63 Oneill Plaza', 43, 'dgrane16@furl.net', '255-956-3432'),
    (44, 'BlogXS', '34 Lerdahl Hill', 44, 'tgentiry17@wordpress.org', '391-309-2788'),
    (45, 'Jatri', '99207 Springview Terrace', 45, 'telstob18@squarespace.com', '226-733-9635'),
    (46, 'Kwilith', '7280 Pond Parkway', 46, 'tflorio19@nytimes.com', '898-315-1259'),
    (47, 'Abatz', '5 Merrick Parkway', 47, 'tmccready1a@si.edu', '162-534-1980'),
    (48, 'Meetz', '79857 Warner Alley', 48, 'rmeus1b@techcrunch.com', '832-374-0653'),
    (49, 'Centimia', '45383 Anderson Lane', 49, 'mcomrie1c@tmall.com', '809-865-1282'),
    (50, 'Flipopia', '1372 Alpine Crossing', 50, 'dgalpin1d@time.com', '928-376-0147');`);
  },
  findAll: async () => {
    return await sequelize.query("SELECT * FROM companies WHERE 1;", { type: "SELECT" });
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

export { companies };
