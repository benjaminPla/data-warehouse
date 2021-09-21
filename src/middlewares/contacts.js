import { contacts } from "../../server/contacts.js";

let response = { success: false, body: null };

const contactsMiddlewares = {
  missingId: (req, res, next) => {
    response.body = "missing id";
    !req.body.id ? res.send(response) : next();
  },
  contactNotFound: async (req, res, next) => {
    response.body = "contact not found";
    (await contacts.findById(req.body)) == "" ? res.send(response) : next();
  },
};

export { contactsMiddlewares };
