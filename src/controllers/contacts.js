import { sequelize } from "../../server/server.js";
import { contacts } from "../../server/contacts.js";

let response = { success: true, body: null };

const contactsControllers = {
  findAll: async (req, res) => {
    response.body = await contacts.findAll();
    res.send(response);
  },
};

export { contactsControllers };
