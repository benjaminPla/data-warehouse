import { sequelize } from "../../server/server.js";
import { contacts } from "../../server/contacts.js";

let response = { success: true, body: null };

const contactsControllers = {
  findAll: async (req, res) => {
    response.body = await contacts.findAll();
    res.send(response);
  },
  findById: async (req, res) => {
    response.body = await contacts.findById(req.body);
    res.send(response);
  },
  delete: async (req, res) => {
    contacts.delete(req.body);
    response.body = `successfully deleted`;
    res.send(response);
  },
};

export { contactsControllers };
